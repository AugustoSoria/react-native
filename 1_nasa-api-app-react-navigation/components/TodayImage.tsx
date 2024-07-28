import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { NASAData } from "../model/NASAData";
import { RootStackParams } from '../model/RootStackParams';
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

interface props {
    data: NASAData
}

function TodayImage({data}: props) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
    
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{uri: data.url}} />
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.date}>{data.date}</Text>
            <Pressable 
                style={styles.btn}
                onPress={() =>
                    navigation.navigate('SelectedArticle', {data, name: data.title})
                }>
              <Text style={styles.view}>View</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#273c93",
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        borderRadius: 30
    },
    img: {
        width: 300,
        height: 150,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 30
    },
    title: {
        color: "white",
        fontWeight: "bold"
    },
    date: {
        color: "#c1c1c1",
        width: "100%",
        textAlign: "left"
    },
    btn: {
        alignSelf: 'flex-end'
    },
    view: {
        color: "#c1c1c1",
    }
});
  
export default TodayImage;