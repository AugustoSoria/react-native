import { useNavigation } from "expo-router";
import { Pressable } from "react-native";
import { StepBackwardIcon } from "./Icons";

interface Props {
  show: boolean
}

function CustomHeaderBackBtn({show}: Props) {
  const navigation = useNavigation();

  if(!show) return null;

  return (
    <Pressable onPress={() => navigation.goBack()} >
      <StepBackwardIcon />
    </Pressable>
  );
}

export default CustomHeaderBackBtn;