import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from "@expo/vector-icons/Feather";

interface HeartIcon {
  filler: boolean
}

export const HeartIcon = ({filler}: HeartIcon) => (
  <AntDesign name={filler? "heart": "hearto"} size={24} color="red" />
)

export const SearchIcon = () => (
  <Feather name="search" size={24} color="white" />
)

export const CloseIcon = () => (
  <AntDesign name="closecircle" size={24} color="white" />
)