import React from "react";
import { Image, Text, View } from "react-native";
import { NASAData } from "../model/NASAData";
import { Link } from "expo-router";

interface props {
  data: NASAData;
}

function TodayImage({ data }: props) {

  return (
    <View className="bg-[#273c93] py-2.5 px-3.5 my-2.5 flex justify-center items-stretch rounded-[30px]">
      <Image
        source={{ uri: data.url }}
        className="w-[300px] h-[150px] border-2 border-white rounded-[30px]"
      />
      <Text className="text-white font-bold">{data.title}</Text>
      <Text className="text-[#c1c1c1] font-bold">{data.date}</Text>
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

export default TodayImage;
