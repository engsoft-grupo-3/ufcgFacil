import { useLocalSearchParams, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

import { MessageCard } from "@/components/MessageCard";

import { ArrowLeft, EnvelopeSimpleOpen } from "phosphor-react-native";
import { Container, ClassInfoContainer, ClassInfoText, GradesCard, GradesInfo, GradesInfoNumber, GradesInfoTitle, GradesTitle, Header, HeaderTitle, MessagesTitle, MessagesTitleText, MessagesContainer } from "@/styles/class";
import { Disciplina } from "@/services/disciplinas";



export default function Class() {
    const {codigo, nome, turma} = useLocalSearchParams();

    

    const router = useRouter();

    function handleBack() {
        router.back()
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

            <GradesTitle>Notas</GradesTitle>
            <GradesCard>
                <GradesInfo>
                    <GradesInfoTitle>NOTA 1</GradesInfoTitle>
                    <GradesInfoNumber>9.0</GradesInfoNumber>
                </GradesInfo>
                <GradesInfo>
                    <GradesInfoTitle>NOTA 2</GradesInfoTitle>
                    <GradesInfoNumber>7.5</GradesInfoNumber>
                </GradesInfo>
                <GradesInfo>
                    <GradesInfoTitle>NOTA 3</GradesInfoTitle>
                    <GradesInfoNumber>8.0</GradesInfoNumber>
                </GradesInfo>
                <GradesInfo>
                    <GradesInfoTitle>M. PARC.</GradesInfoTitle>
                    <GradesInfoNumber>8.17</GradesInfoNumber>
                </GradesInfo>
                <GradesInfo>
                    <GradesInfoTitle>E. FINAL</GradesInfoTitle>
                    <GradesInfoNumber>-</GradesInfoNumber>
                </GradesInfo>
                <GradesInfo>
                    <GradesInfoTitle>M. FINAL</GradesInfoTitle>
                    <GradesInfoNumber>8.17</GradesInfoNumber>
                </GradesInfo>
            </GradesCard>

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