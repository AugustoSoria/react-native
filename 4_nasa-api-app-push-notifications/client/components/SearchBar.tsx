import api from "@/api/api";
import { NASAData } from "@/model/NASAData";
import { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import OpenSearchBarBtn from "./OpenSearchBarBtn";
import CloseSearchBarBtn from "./CloseSearchBarBtn";

interface props {
  setData: (text: NASAData[]) => void
}

function SearchBar({ setData }: props) {
  const [search, setSearch] = useState<string>("");
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);

  useEffect(() => {
    setSearch("")
  }, [showSearchBar]);

  useEffect(() => {
    api
      .mockSearch(search)
      .then((data) => setData(data));
  }, [search]);

  if(!showSearchBar) {
    return <OpenSearchBarBtn setShowSearchBar={setShowSearchBar}/>
  }

  return (
    <View className="flex-row items-center">
      <TextInput
        className="h-6 w-60 mr-1 pl-1 rounded-[10px] bg-white"
        onChangeText={setSearch}
        value={search}
      />
      <CloseSearchBarBtn setShowSearchBar={setShowSearchBar}/> 
    </View>
  )
}

export default SearchBar;