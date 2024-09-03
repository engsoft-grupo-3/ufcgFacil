import { ButtonText, Container, LoginButton, LoginCard, LoginInput, SupportText } from "@/styles/login";
import { Image } from "react-native";

import logo from "../../../assets/images/Logo.png";

export default function Login() {
    return (
        <Container>
            <Image source={logo} />

            <LoginCard>
                <LoginInput placeholder="Matrícula" />
                <LoginInput placeholder="Senha" />
                <LoginButton><ButtonText>Acessar</ButtonText></LoginButton>
            </LoginCard>

            <SupportText>Problemas com o acesso?</SupportText>
        </Container>
    );
}