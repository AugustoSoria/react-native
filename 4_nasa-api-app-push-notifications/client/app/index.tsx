import { useNavigation } from "expo-router";
import Main from "../components/Main";
import { useEffect } from "react";
import CustomHeader from "@/components/CustomHeader";

function Index() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <CustomHeader title="Inicio" />,
    });
  }, []);

  return <Main />;
}

export default Index;
