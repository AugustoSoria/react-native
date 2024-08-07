import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';

interface SearchIconProps {
  focused?: boolean
  color?: string
}

export const HomeIcon = () => (
  <Octicons name="home" size={24} color="white" />
)

export const SearchIcon = ({focused = false, color = "white"}: SearchIconProps) => (
  focused ? <Ionicons name="search-circle" size={34} color={color} /> :
  <FontAwesome name="search" size={24} color={color} />
)

export const LibraryIcon = () => (
  <MaterialIcons name="library-music" size={24} color="white" />
)


export const StepBackwardIcon = () => (
<Ionicons name="chevron-back" size={24} color="white" />
)