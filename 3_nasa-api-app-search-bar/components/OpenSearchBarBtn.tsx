import Feather from "@expo/vector-icons/Feather";
import { Pressable } from "react-native";

interface props {
  setShowSearchBar: (value: boolean) => void;
}

function OpenSearchBarBtn({setShowSearchBar}: props) {
  return (
    <Pressable
      onPress={() => {
        setShowSearchBar(true);
      }}>
      <Feather name="search" size={24} color="white" />
    </Pressable>
  );
}

export default OpenSearchBarBtn;