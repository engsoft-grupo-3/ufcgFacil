import { ClassCard } from "@/components/ClassCard";

import { CardsContainer, Container, HomeTitle, } from "@/styles/home";

export default function Home() {
    return (
        <Container>
            <HomeTitle>Turmas</HomeTitle>

            <CardsContainer>
                <ClassCard />
                <ClassCard />
                <ClassCard />
                <ClassCard />
                <ClassCard />
            </CardsContainer>
        </Container>
    );
}
