import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { NASAData } from "../model/NASAData";
import api from "../api/api";
import TodayImage from "./TodayImage";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import ThemeSwitch from "./ThemeSwitch";
import ArticlesList from "./ArticlesList";

function Main() {
  const [data, setData] = useState<NASAData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // To use data from NASA API
  // useEffect(() => {
  //   api
  //     .getAll()
  //     .then((data) => setData(data))
  //     .catch(() => setError(true))
  //     .finally(() => setLoading(false));
  // }, []);

  // To use mocked data
  useEffect(() => {
    api
      .getAllMockData()
      .then((data) => setData(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />;
  
  if (error) return (
    <View className="bg-light-bg dark:bg-dark-bg flex-1 items-center px-3 pb-1">
      <Text className="text-white">Something went wrong.</Text>
    </View>
  );
  
  return (
    <View className="bg-light-bg dark:bg-dark-bg flex-1 w-full items-center px-3.5 pb-1.25">
      <View className="w-full flex-row items-center justify-between">
        <Text className="text-white">Explore</Text>
        <ThemeSwitch />
      </View>
      <TodayImage />
      <View className="w-full flex-row items-center justify-between">
        <Text className="text-white">Last 5 days</Text>
        <SearchBar setData={setData} />
      </View>
      <ArticlesList data={data} />
    </View>
  );
}

export default Main;