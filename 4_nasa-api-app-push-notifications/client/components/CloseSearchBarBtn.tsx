import { Pressable } from "react-native";
import { CloseIcon } from "./Icons";

interface props {
  setShowSearchBar: (value: boolean) => void;
}

function CloseSearchBarBtn({setShowSearchBar}: props) {
  return (
    <Pressable
      onPress={() => {
        setShowSearchBar(false);
      }}>
      <CloseIcon />
    </Pressable>
  );
}

export default CloseSearchBarBtn;