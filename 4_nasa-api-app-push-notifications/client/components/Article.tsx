import { Pressable, Text, View } from "react-native";
import { NASAData } from "../model/NASAData";
import { Link } from "expo-router";
import { HeartIcon } from "./Icons";

interface props {
  data: NASAData
  isFavorite: boolean
  addFavorite: (title: string) => void
}

function Article({ data, isFavorite, addFavorite }: props) {

  return (
    <View className="bg-light-semi-accent dark:bg-dark-semi-accent py-3.5 px-3.5 my-2.5 rounded-[30px]">
      <View className="flex-row justify-between">
        <Text className="text-white font-bold">{data.title}</Text>
        <Pressable onPress={() => addFavorite(data.title)}>
          <HeartIcon filler={isFavorite} />
        </Pressable>
      </View>
      <Text className="text-[#c1c1c1] w-full text-left">{data.date}</Text>
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

export default Article;