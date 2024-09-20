import { useLocalSearchParams, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

import { MessageCard } from "@/components/MessageCard";

import { ArrowLeft, EnvelopeSimpleOpen } from "phosphor-react-native";
import { Container, ClassInfoContainer, ClassInfoText, GradesCard, GradesInfo, GradesInfoNumber, GradesInfoTitle, GradesTitle, Header, HeaderTitle, MessagesTitle, MessagesTitleText, MessagesContainer } from "@/styles/class";
import extraiNotas, { Notas } from "@/services/notas";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/authContext";
import { Loading } from "@/components/Loading";


export default function Class() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [notas, setNotas] = useState<Notas>({} as Notas);
    const {codigo, nome, turma} = useLocalSearchParams();
    const {cookie} = useContext(AuthContext);

    useEffect(() => {
        fetchNotas();
    }, []);

    async function fetchNotas() {
        setIsLoading(true);

        const data = await extraiNotas(codigo, turma, cookie);
        setNotas(data);

        setIsLoading(false);
    }

    const router = useRouter();

    function handleBack() {
        router.back();
    }

    function handleOpenMessage() {
        router.push('/message');
    }

    return (
        <Container>
            <Header>
                <TouchableOpacity onPress={handleBack}>
                    <ArrowLeft color="#2D1E70" weight="bold" />
                </TouchableOpacity>
                <HeaderTitle>{nome}</HeaderTitle>
            </Header>

            <ClassInfoContainer>
                <ClassInfoText>Turma: {turma}/</ClassInfoText>
                <ClassInfoText>Período: 2024.1</ClassInfoText>
                <ClassInfoText>Código: {codigo}</ClassInfoText>
            </ClassInfoContainer>
            
            {isLoading ? <Loading /> : (
            <>
            <GradesTitle>Notas</GradesTitle>
            <GradesCard>
                <GradesInfo>
                    <GradesInfoTitle>NOTA 1</GradesInfoTitle>
                    <GradesInfoNumber>{notas["Nota 1"] === "" ? "-" : notas["Nota 1"]}</GradesInfoNumber>
                </GradesInfo>
                <GradesInfo>
                    <GradesInfoTitle>NOTA 2</GradesInfoTitle>
                    <GradesInfoNumber>{notas["Nota 2"] === "" ? "-" : notas["Nota 2"]}</GradesInfoNumber>
                </GradesInfo>
                <GradesInfo>
                    <GradesInfoTitle>NOTA 3</GradesInfoTitle>
                    <GradesInfoNumber>{notas["Nota 3"] === "" ? "-" : notas["Nota 3"]}</GradesInfoNumber>
                </GradesInfo>
                <GradesInfo>
                    <GradesInfoTitle>M. PARC.</GradesInfoTitle>
                    <GradesInfoNumber>{notas["M.&nbsp;parc."] === "" ? "-" : notas["M.&nbsp;parc."]}</GradesInfoNumber>
                </GradesInfo>
                <GradesInfo>
                    <GradesInfoTitle>E. FINAL</GradesInfoTitle>
                    <GradesInfoNumber>{notas["E.&nbsp;final"] === "" ? "-" : notas["E.&nbsp;final"]}</GradesInfoNumber>
                </GradesInfo>
                <GradesInfo>
                    <GradesInfoTitle>M. FINAL</GradesInfoTitle>
                    <GradesInfoNumber>{notas["M.&nbsp;final"] === "" ? "-" : notas["M.&nbsp;final"]}</GradesInfoNumber>
                </GradesInfo>
            </GradesCard>
            </>
            )}

            <MessagesTitle>
                <EnvelopeSimpleOpen color="#2D1E70" weight="bold" />
                <MessagesTitleText>Mensagens</MessagesTitleText>
            </MessagesTitle>

            <MessagesContainer>
                <MessageCard onPress={handleOpenMessage} />
            </MessagesContainer>

        </Container>
    );
}