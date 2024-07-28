import { NASAData } from "@/model/NASAData";
import { Image, Text, View, ScrollView } from "react-native";

interface props {
  data: NASAData
}

function SelectedArticle({data: {title, date, url, explanation}}: props) {
  return (
    <View className="bg-light-bg dark:bg-dark-bg flex-1 w-full py-5 px-4 items-center">
      <View className="bg-light-accent dark:bg-dark-accent flex-1 w-full items-start rounded-[30px] py-4 px-4">
        <Image
          source={{ uri: url as string }}
          resizeMode="contain"
          className="w-full h-[150px] border-2  self-center border-white rounded-3xl bg-black my-2"
        />
        <Text className="text-white font-bold">{title}</Text>
        <Text className="text-[#c1c1c1] w-full text-left">{date}</Text>
        <ScrollView>
          <Text className="text-white text-sm">{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
}

export default SelectedArticle;