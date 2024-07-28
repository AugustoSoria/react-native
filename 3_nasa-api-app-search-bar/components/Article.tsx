import React from "react";
import { Text, View } from "react-native";
import { NASAData } from "../model/NASAData";
import { Link } from "expo-router";

interface props {
  data: NASAData
}

function Article({ data }: props) {

  return (
    <View className="bg-light-semi-accent dark:bg-dark-semi-accent py-3.5 px-3.5 my-2.5 rounded-[30px]">
      <Text className="text-white font-bold">{data.title}</Text>
      <Text className="text-[#c1c1c1] w-full text-left">{data.date}</Text>
      <Link
        className="self-end"
        href={{
          pathname: `/${data.title}`,
          params: {
            title: data.title,
            url: data.url,
            date: data.date,
            explanation: data.explanation,
          },
        }}
      >
        <Text className="text-[#c1c1c1]">View</Text>
      </Link>
    </View>
  );
}

export default Article;