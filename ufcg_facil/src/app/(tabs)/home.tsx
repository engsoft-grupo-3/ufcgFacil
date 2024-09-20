import { useRouter } from "expo-router";

import { ClassCard } from "@/components/ClassCard";

import extraiDisciplinas, { Disciplina } from "@/services/disciplinas";

import { CardsContainer, Container, PageTitle, } from "@/styles/home";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/authContext";
import { Loading } from "@/components/Loading";

export default function Home() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [classes, setClasses] = useState<Disciplina[]>([]);

    const {cookie} = useContext(AuthContext);

    useEffect(() => {
        fetchDisciplinas();
    }, []);

    async function fetchDisciplinas() {
        setIsLoading(true);

        const data = await extraiDisciplinas(cookie);
        
        setClasses(data);
        console.log("DATA: " + data);

        setIsLoading(false);
    }

    const router = useRouter();

    function handleNavigation(currentClass : Disciplina) {
        router.push(
            {
                pathname: "/class",
                params: {
                    codigo: currentClass.codigo,
                    nome: currentClass.nome,
                    turma: currentClass.turma,
                }
            }
        )
    }
    return (
        <Container>
            <PageTitle>Turmas</PageTitle>
        
            <CardsContainer>
                {isLoading ? <Loading /> : (
                    <>
                    {classes.map((currentClass) => (
                        <ClassCard key={currentClass.nome} onPress={() => handleNavigation(currentClass)} code={currentClass.codigo} name={currentClass.nome} classNumber={currentClass.turma} schedule={currentClass.horario}  />
                    ))}
                    </>
                )}

                {/* <ClassCard onPress={handleNavigation} name="Engenharia de Software" classNumber="1" code="1412314" schedule={`2 10:00 - 12:00 (CAA 201)\n5 08:00 - 10:00 (CAA201)`} />
                <ClassCard onPress={handleNavigation} name="Engenharia de Software" classNumber="1" code="1412314" schedule={`2 10:00 - 12:00 (CAA 201)\n5 08:00 - 10:00 (CAA201)`} />
                <ClassCard onPress={handleNavigation} name="Engenharia de Software" classNumber="1" code="1412314" schedule={`2 10:00 - 12:00 (CAA 201)\n5 08:00 - 10:00 (CAA201)`} />
                <ClassCard onPress={handleNavigation} name="Engenharia de Software" classNumber="1" code="1412314" schedule={`2 10:00 - 12:00 (CAA 201)\n5 08:00 - 10:00 (CAA201)`} />
                <ClassCard onPress={handleNavigation} name="Engenharia de Software" classNumber="1" code="1412314" schedule={`2 10:00 - 12:00 (CAA 201)\n5 08:00 - 10:00 (CAA201)`} /> */}
                </CardsContainer>
        </Container>
    );
}
