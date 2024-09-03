import { Container } from "@/styles/login";
import { Link } from "expo-router";
import { Text } from "react-native";

export default function Index() {
  return (
    <>
      <Container
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>INICIAL     <Link href={"/login"} style={{ color: "blue" }}>PARA LOGIN</Link></Text>
      </Container>
    </>
  );
}
