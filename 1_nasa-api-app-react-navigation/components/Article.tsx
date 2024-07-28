import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { NASAData } from "../model/NASAData";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../model/RootStackParams";

interface props {
  data: NASAData
}

function Article({data}: props) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.date}>{data.date}</Text>
      <Pressable
          onPress={() =>
              navigation.navigate('SelectedArticle', {data, name: data.title})
          }>
        <Text style={styles.view}>View</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#122061",
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderRadius: 30
  },
  title: {
    color: "white",
    fontWeight: "bold"
  },
  date: {
    color: "#c1c1c1",
    width: "100%",
    textAlign: "left"
  },
  view: {
    color: "#c1c1c1",
    width: "100%",
    textAlign: "right"
  }
});

export default Article;