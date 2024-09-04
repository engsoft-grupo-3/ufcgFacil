import { StyleSheet, Text, View } from "react-native";




export default function Home() {

    return (
        <View style={styles.container}>
            <Text>TELA TURMAS</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"
    }
})
