import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { NASAData } from "../model/NASAData";
import { Link } from "expo-router";
import api from "@/api/api";

function TodayImage() {
  const [data, setData] = useState<NASAData>();

  useEffect(() => {
    api
      .getNewestImage()
      .then((data) => setData(data));
  }, []);

  if(!data) return;

  return (
    <View className="bg-light-accent dark:bg-dark-accent py-2.5 px-3.5 my-2.5 flex justify-center items-stretch rounded-[30px]">
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
          params: { data: JSON.stringify(data) },
        }}
      >
        <Text className="text-[#c1c1c1]">View</Text>
      </Link>
    </View>
  );
}

export default TodayImage;
