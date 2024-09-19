import { useRouter } from "expo-router";

import { ClassCard } from "@/components/ClassCard";

import extraiDisciplinas from "@/services/disciplinas";

import { CardsContainer, Container, PageTitle, } from "@/styles/home";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/authContext";

export default function Home() {

    const {cookie} = useContext(AuthContext);

    useEffect(() => {
        const data = extraiDisciplinas(cookie);
        console.log(data);
    }, [])

    const router = useRouter();

    function handleNavigation() {
        router.push('/class')
    }
    return (
        <Container>
            <PageTitle>Turmas</PageTitle>

            <CardsContainer>
                <ClassCard onPress={handleNavigation} name="Engenharia de Software" classNumber="1" code="1412314" schedule={`2 10:00 - 12:00 (CAA 201)\n5 08:00 - 10:00 (CAA201)`} />
                <ClassCard onPress={handleNavigation} name="Engenharia de Software" classNumber="1" code="1412314" schedule={`2 10:00 - 12:00 (CAA 201)\n5 08:00 - 10:00 (CAA201)`} />
                <ClassCard onPress={handleNavigation} name="Engenharia de Software" classNumber="1" code="1412314" schedule={`2 10:00 - 12:00 (CAA 201)\n5 08:00 - 10:00 (CAA201)`} />
                <ClassCard onPress={handleNavigation} name="Engenharia de Software" classNumber="1" code="1412314" schedule={`2 10:00 - 12:00 (CAA 201)\n5 08:00 - 10:00 (CAA201)`} />
                <ClassCard onPress={handleNavigation} name="Engenharia de Software" classNumber="1" code="1412314" schedule={`2 10:00 - 12:00 (CAA 201)\n5 08:00 - 10:00 (CAA201)`} />
            </CardsContainer>
        </Container>
    );
}
