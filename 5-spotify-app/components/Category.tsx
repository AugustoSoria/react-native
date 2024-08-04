import { ICategory } from "@/categories";
import useRandomColor from "@/hooks/useRandomColor";
import { Image, Text, View } from "react-native";

interface Props {
  category: ICategory
}

function Category({category}: Props) {
  const rdmColor = useRandomColor()
  const icon = category.icons[0]

  return (
    <View style={{
      backgroundColor: rdmColor, width: 173, height: 120, marginBottom: 15, 
      borderRadius: 10, flexDirection: "row", justifyContent: "space-between",
      overflow: "hidden"
    }}>
      <Text style={{color: "white", margin: 10, fontSize: 18, fontWeight: "bold", textTransform: "capitalize", maxWidth: "65%"}}>{category.name}</Text>
      <View style={{ position: "relative", width: "30%" }}>
        <Image
          source={{ uri: icon.url }}
          style={{
            borderRadius: 10,
            position: "absolute", bottom: -5, right: -15,
            transform: [{rotate: '30deg'}],
            width: (icon.width / 3.5), height: (icon.height / 3.5)
          }}
        />
      </View>
    </View>
  );
}

export default Category;