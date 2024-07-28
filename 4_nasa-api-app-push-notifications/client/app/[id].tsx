import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import CustomHeader from "../components/CustomHeader";
import SelectedArticle from "@/components/SelectedArticle";
import { NASAData } from "@/model/NASAData";

function SelectedArticlePage() {
  const { data } = useLocalSearchParams();
  const pData: NASAData = data ? JSON.parse(data as string) : null;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <CustomHeader title={pData.title} />,
    });
  }, []);

  return (
    <SelectedArticle data={pData} />
  );
}

export default SelectedArticlePage;