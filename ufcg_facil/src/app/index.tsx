import { ButtonText, Container, LoginButton, LoginCard, LoginInput, SupportText } from "@/styles/login";
import { Image, TouchableOpacity, TouchableOpacityProps } from "react-native";

import logo from "../../assets/images/Logo.png";
import { router } from "expo-router";



export default function Login({ ...rest }: TouchableOpacityProps) {

  function handleNavigation() {
    router.replace("/home");
  }

  return (
    <Container>
      <Image source={logo} />

      <LoginCard>
        <LoginInput placeholder="Matrícula" />
        <LoginInput placeholder="Senha" />
        <LoginButton {...rest} onPress={handleNavigation}>
          <ButtonText>Acessar</ButtonText>
        </LoginButton>
      </LoginCard>

      <SupportText>Problemas com o acesso?</SupportText>
    </Container>
  );
}
