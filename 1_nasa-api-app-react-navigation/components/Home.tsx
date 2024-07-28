import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TodayImage from "./TodayImage";
import { NASAData } from "../model/NASAData";
import Article from "./Article";
import api from "../api/api";

function Home() {
  const [data, setData] = useState<NASAData[]>([]);

  useEffect(() => {
    api.getAll()
      .then((data) => setData(data))
  }, [])

  /* useEffect(() => {
    api.getAllMockData()
      .then((data) => setData(data))
  }, []) */

  if(!data.length) return (
    <View style={styles.container}>
      <Text style={{color: "white"}}>Something went wrong.</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.explore}>Explore</Text>
      <TodayImage data={data[0]}/>
      <Text style={styles.explore}>Last 5 days</Text>
      <FlatList
        style={styles.articleList}
        data={data.slice(1)}
        renderItem={({item}) => <Article data={item}/>}
        keyExtractor={(_, idx) => idx.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c1854',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 5
  },
  explore: {
    width: "100%",
    textAlign: "left",
    color: "white"
  },
  articleList: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 10,
  }
});

export default Home;