import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
} from "react-native";
import { useNavigation } from "expo-router";
import { NASAData } from "../model/NASAData";
import api from "../api/api";
import TodayImage from "./TodayImage";
import Article from "./Article";
import CustomHeader from "./CustomHeader";
import Spinner from "./Spinner";
import CloseSearchBarBtn from "./CloseSearchBarBtn";
import OpenSearchBarBtn from "./OpenSearchBarBtn";
import SearchBar from "./SearchBar";
import ThemeSwitch from "./ThemeSwitch";

function Main() {
  const [data, setData] = useState<NASAData[]>([]);
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <CustomHeader title="Inicio" />,
    });
  }, []);

  useEffect(() => {
    setSearch("")
  }, [showSearchBar]);

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
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    api
      .mockSearch(search)
      .then((data) => setData(data));
  }, [search]);

  if (loading) return <Spinner />;
  
  if (error)
    return (
      <View className="flex-1 items-center px-3 pb-1">
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
        {
          showSearchBar ? 
          <View className="flex-row items-center">
            <SearchBar text={search} onChangeText={setSearch} />
            <CloseSearchBarBtn setShowSearchBar={setShowSearchBar}/> 
          </View> : 
          <OpenSearchBarBtn setShowSearchBar={setShowSearchBar}/>
        }
      </View>
      <FlatList
        className="w-full py-2.5 px-2.5"
        data={data}
        renderItem={({ item }) => <Article data={item} />}
        keyExtractor={(_, idx) => idx.toString()}
      />
    </View>
  );
}

export default Main;
