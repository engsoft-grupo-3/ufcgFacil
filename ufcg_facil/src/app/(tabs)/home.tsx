import { ClassCard } from "@/components/ClassCard";

import { CardsContainer, Container, HomeTitle, } from "@/styles/home";
import { Link, useRouter } from "expo-router";



export default function Home() {

    const router = useRouter();

    function handleNavigation() {
        router.push('/class')
    }
    return (
        <Container>
            <HomeTitle>Turmas</HomeTitle>

            <CardsContainer>
                <ClassCard onPress={handleNavigation} />
                <ClassCard />
                <ClassCard />
                <ClassCard />
                <ClassCard />
            </CardsContainer>
        </Container>
    );
}
