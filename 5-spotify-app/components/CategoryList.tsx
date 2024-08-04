import { FlatList } from "react-native";
import Category from "./Category";
import { categories } from "@/categories";

function CategoryList() {
  return (
    <FlatList
      style={{ flex: 1}}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      data={categories}
      keyExtractor={(_, idx) => idx.toString()}
      renderItem={({item}) => (
        <Category category={item} />
      )}
    />
  );
}

export default CategoryList;