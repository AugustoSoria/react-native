import { useNavigation } from "expo-router";
import { Pressable } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
  show: boolean
}

function CustomHeaderBackBtn({show}: Props) {
  const navigation = useNavigation();

  if(!show) return null;

  return (
    <Pressable onPress={() => navigation.goBack()} >
      <Ionicons name="chevron-back" size={24} color="white" />
    </Pressable>
  );
}

export default CustomHeaderBackBtn;