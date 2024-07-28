import { ActivityIndicator, View } from "react-native";

function Spinner() {
  return (
    <View className="flex-1 justify-center">
      <ActivityIndicator color={"#0c1854"} size={"large"} />
    </View>
  );
}

export default Spinner;