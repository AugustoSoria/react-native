import { useColorScheme } from "nativewind";
import { Switch,  } from "react-native";

function ThemeSwitch() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Switch 
      trackColor={{true: '#0c1854', false: '#4469ff'}}
      thumbColor={'white'}
      value={colorScheme === "light"} 
      onChange={toggleColorScheme} />
  );
}

export default ThemeSwitch;