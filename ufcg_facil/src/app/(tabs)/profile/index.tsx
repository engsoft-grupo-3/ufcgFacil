import { ProfileCard } from "@/components/ProfileCard";
import { StyleSheet, Text, View } from "react-native";
import { CardsContainer, Container, HomeTitle, } from "@/styles/home";

export default function Profile() {

     return (
            <Container>
                <HomeTitle>Perfil</HomeTitle>

                <CardsContainer>
                    <ProfileCard />
                </CardsContainer>
            </Container>
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





