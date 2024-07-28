import { Text, View } from "react-native";

interface props {
  title: string
}

function CustomHeader({ title }: props) {
  return (
    <View>
      <Text className="text-white font-medium capitalize text-lg">{title}</Text>
    </View>
  );
}

export default CustomHeader;