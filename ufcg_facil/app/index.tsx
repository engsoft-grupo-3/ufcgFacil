import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>INICIAL     <Link href={"/login"} style={{ color: "blue" }}>PARA LOGIN</Link></Text>
    </View>
  );
}
