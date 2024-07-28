import { Text, View } from "react-native";

function CustomHeader({ title }) {
  return (
    <View>
      <Text className="text-white font-medium capitalize text-lg">{title}</Text>
    </View>
  );
}

export default CustomHeader;
