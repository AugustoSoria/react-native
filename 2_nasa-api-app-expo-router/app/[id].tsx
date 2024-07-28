import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import CustomHeader from "../components/CustomHeader";

function SelectedArticle() {
  const { title, url, date, explanation } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <CustomHeader title={title} />,
    });
  }, []);

  return (
    <View className="flex-1 w-full bg-[#0c1854] py-5 px-4 items-center">
      <View className="flex-1 w-full bg-[#273c93] items-start rounded-[30px] py-4 px-4">
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
