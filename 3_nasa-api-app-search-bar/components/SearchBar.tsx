import { TextInput } from "react-native";

interface props {
  onChangeText: (text: string) => void;
  text: string | undefined;
}

function SearchBar({text, onChangeText}: props) {
  return (
    <TextInput
      className="h-6 w-60 mr-1 pl-1 rounded-[10px] bg-white"
      onChangeText={onChangeText}
      value={text}
    />
  );
}

export default SearchBar;