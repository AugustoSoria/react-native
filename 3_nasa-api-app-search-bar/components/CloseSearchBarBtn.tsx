import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable } from "react-native";

interface props {
  setShowSearchBar: (value: boolean) => void;
}

function CloseSearchBarBtn({setShowSearchBar}: props) {
  return (
    <Pressable
      onPress={() => {
        setShowSearchBar(false);
      }}>
      <AntDesign name="closecircle" size={24} color="white" />
    </Pressable>
  );
}

export default CloseSearchBarBtn;