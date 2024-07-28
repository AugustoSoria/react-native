import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
} from "react-native";
import { NASAData } from "../model/NASAData";
import api from "../api/api";
import TodayImage from "./TodayImage";
import Article from "./Article";
import { useNavigation } from "expo-router";
import CustomHeader from "./CustomHeader";
import Spinner from "./Spinner";

function Main() {
  const [data, setData] = useState<NASAData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation();

  // To use data from NASA API
  /* useEffect(() => {
    api
      .getAll()
      .then((data) => setData(data))
      .finally(() => setLoading(false));
  }, []); */

  // To use mocked data
  useEffect(() => {
    api
      .getAllMockData()
      .then((data) => setData(data))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <CustomHeader title="Inicio" />,
    });
  }, []);

  if (loading) <Spinner />
    

  if (!data.length)
    return (
      <View className="flex-1 items-center px-3 pb-1">
        <Text className="text-white">Something went wrong.</Text>
      </View>
    );

  return (
    <View className="flex-1 bg-[#0c1854] w-full items-center px-3.5 pb-1.25">
      <Text className="w-full text-left text-white">Explore</Text>
      <TodayImage data={data[0]} />
      <Text className="w-full text-left text-white">Last 5 days</Text>
      <FlatList
        className="w-full py-2.5 px-2.5"
        data={data.slice(1)}
        renderItem={({ item }) => <Article data={item} />}
        keyExtractor={(_, idx) => idx.toString()}
      />
    </View>
  );
}

export default Main;
