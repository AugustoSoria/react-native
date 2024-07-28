import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParams } from '../model/RootStackParams';

type Props = NativeStackScreenProps<RootStackParams, "SelectedArticle">;

function SelectedArticle({ route }: Props) {
    const { data } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Image style={styles.img} source={{ uri: data.url }} />
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.date}>{data.date}</Text>
                <ScrollView>
                    <Text style={styles.exp}>{data.explanation}</Text>
                </ScrollView>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0c1854",
        paddingVertical: 15,
        paddingHorizontal: 15,
        display: "flex",
        alignItems: "center",
    },
    subContainer: {
        width: "100%",
        flex: 1,
        backgroundColor: "#273c93",
        display: "flex",
        alignItems: "flex-start",
        borderRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
    img: {
        resizeMode: 'contain',
        width: "100%",
        height: 200,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 30,
        backgroundColor: 'black'
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
    exp: {
        color: "white",
        fontSize: 20
    }
});

export default SelectedArticle;