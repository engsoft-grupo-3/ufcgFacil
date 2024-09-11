import { StyleSheet, Text, View } from "react-native";


export default function Profile() {

    return (
        <View style={styles.container}>
            <Text>TELA PERFIL</Text>
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