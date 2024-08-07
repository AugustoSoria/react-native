import { useState } from "react";
import { TextInput, View } from "react-native";

import FontAwesome from '@expo/vector-icons/FontAwesome';

function SearchBar() {
  const [search, setSearch] = useState<string>("");

  return (
    <View style={{ flexDirection: "row", backgroundColor: "white", alignItems: "center", justifyContent: "space-between", borderRadius: 5, padding: 10 }}>
      <FontAwesome name="search" size={24} color="black" />
      <TextInput
        style={{ width: "90%", height: 35, fontSize: 20, fontWeight: "900" }}
        placeholder="Artists, songs or prodcasts"
        onChangeText={setSearch}
        value={search}
      />
    </View>
  );
}

export default SearchBar;