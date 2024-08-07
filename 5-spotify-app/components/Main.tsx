import { View, Text } from "react-native";
import SearchBar from "./SearchBar";
import CategoryList from "./CategoryList";

function Main() {

  return (
    <View style={{ flex: 1, backgroundColor: "black", padding: 15 }}>
      <SearchBar />
      <Text style={{ color: "white", fontSize: 17, marginVertical: 10 }}>Browse all</Text>
      <CategoryList />
    </View>
  );
}

export default Main;