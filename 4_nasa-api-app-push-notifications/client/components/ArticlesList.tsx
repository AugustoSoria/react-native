import { FlatList } from "react-native";
import { NASAData } from "@/model/NASAData";
import Article from "./Article";
import { useFavoritesStorage } from "@/hooks/useFavoritesStorage";

interface Props {
  data: NASAData[]
}

function ArticlesList({data}: Props) {
  const { favorites, addFavorite } = useFavoritesStorage();
  
  return (
    <FlatList
      className="w-full my-2.5 px-2.5"
      data={data}
      renderItem={({ item }) => (
        <Article 
          data={item} 
          isFavorite={favorites.includes(item.title)}
          addFavorite={addFavorite}
        />
      )}
      keyExtractor={(_, idx) => idx.toString()}
    />
  );
}

export default ArticlesList;