import { IPlaylist } from "@/playlists";
import { Image, Text, View } from "react-native";

interface Props {
  playlist: IPlaylist
}

function Playlist({playlist}: Props) {
  return (
    <View style={{maxWidth: 125, marginBottom: 5}}>
      <Image
        source={{ uri: playlist.images[0].url }}
        style={{
          width: 115, height: 115
        }}
      />
      <Text style={{color: "white", textAlign: "center", fontSize: 15}}>{playlist.name}</Text>
      <Text style={{color: "grey", textAlign: "center", textTransform: "uppercase", fontSize: 7}}>{playlist.type} • from {playlist.owner.display_name}</Text>
    </View>
  );
}

export default Playlist;