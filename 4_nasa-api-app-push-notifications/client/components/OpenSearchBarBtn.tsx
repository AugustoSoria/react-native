import { Pressable } from "react-native";
import { SearchIcon } from "./Icons";

interface props {
  setShowSearchBar: (value: boolean) => void;
}

function OpenSearchBarBtn({setShowSearchBar}: props) {
  return (
    <Pressable
      onPress={() => {
        setShowSearchBar(true);
      }}>
      <SearchIcon />
    </Pressable>
  );
}

export default OpenSearchBarBtn;