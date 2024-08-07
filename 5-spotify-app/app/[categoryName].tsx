import GradientHeader from "@/components/GradientHeader";
import Playlist from "@/components/Playlist";
import { playlists } from "@/playlists";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { FlatList, Text, View } from "react-native";

function CategoryPage() {
  const { categoryName, data } = useLocalSearchParams();
  const pData = data ? JSON.parse(data as string) : null;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerBackground: () => (
        <GradientHeader color={pData.color} />
      ),
    });
  }, []);

  return (
    <View style={{flex: 1, padding: 15, backgroundColor: "black"}}>
      <Text style={{color: "white", fontSize: 25, marginBottom: 30}}>{categoryName}</Text>
      <FlatList
        numColumns={3}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        data={playlists}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({item}) => (
          <Playlist playlist={item} />
        )}
      />
    </View>
  );
}

export default CategoryPage;