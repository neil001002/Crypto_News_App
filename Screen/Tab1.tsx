import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";
import NewsCard from "../Components/NewsCard";
import newsAPI from "../apis/News";

const Tab1 = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNewsFromAPI();
    // newsResponse();
  }, []);

  // const newsResponse = async () => {
  //   const response = await newsAPI.get(
  //     "top-headlines?country=us&apiKey=f08f0a610915445b89739684b1217bc4"
  //   );
  //   console.log(response.data);
  // };

  function getNewsFromAPI() {
    newsAPI
      .get(
        "everything?q=crypto&sortBy=popularity&language=en&apiKey=f08f0a610915445b89739684b1217bc4"
      )
      .then(async function (response) {
        setNews(response.data);
        // console.log(response.data.articles);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  if (!news) {
    return null;
  }

  return (
    <View style={{ backgroundColor: "white" }}>
      <FlatList
        data={news.articles}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item }) => {
          return <NewsCard item={item} />;
        }}
      />
    </View>
  );
};

export default Tab1;
