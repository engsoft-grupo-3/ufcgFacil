import { View } from "react-native";

import { Card, CardSubtitle, CardSubtitleContainer, CardSubtitleContainerRow, CardTitle, NotificationContainer, NotificationText, ScheduleText, CardSubtitleInformation, CardSubtitleDescription, CardSubtitleCurriculumInformation, CardSubtitleCurriculumDescription, ProgressBarContainer, ProgressFill } from "./styles";
import { FontAwesome } from "@expo/vector-icons";

export function ProfileCard() {
    return (
        <Card>
            <CardSubtitleContainer>
                <CardSubtitleContainerRow>
                    <CardSubtitleInformation>Aluno:</CardSubtitleInformation>
                    <CardSubtitleDescription>120110375 GABRIEL HENRIQUE LOPES</CardSubtitleDescription>
                </CardSubtitleContainerRow>
                <CardSubtitleContainerRow>
                    <CardSubtitleInformation>Curso:</CardSubtitleInformation>
                    <CardSubtitleDescription>2024.1</CardSubtitleDescription>
                </CardSubtitleContainerRow>
                <CardSubtitleContainerRow>
                    <CardSubtitleInformation>Currículo:</CardSubtitleInformation>
                    <CardSubtitleDescription>2023</CardSubtitleDescription>
                </CardSubtitleContainerRow>
                <CardSubtitleContainerRow>
                    <CardSubtitleInformation>Situação:</CardSubtitleInformation>
                    <CardSubtitleDescription>Regular</CardSubtitleDescription>
                </CardSubtitleContainerRow>
            </CardSubtitleContainer>

            <CardTitle>Execução curricular</CardTitle>
            <CardSubtitleContainer>
                <CardSubtitleContainerRow>
                    <CardSubtitleCurriculumInformation>Carga horária mínima:</CardSubtitleCurriculumInformation>
                    <CardSubtitleCurriculumDescription>3270</CardSubtitleCurriculumDescription>
                </CardSubtitleContainerRow>
                <CardSubtitleContainerRow>
                    <CardSubtitleCurriculumInformation>Carga horária integralizada:</CardSubtitleCurriculumInformation>
                    <CardSubtitleCurriculumDescription>1200 (36%)</CardSubtitleCurriculumDescription>
                </CardSubtitleContainerRow>
                <CardSubtitleContainerRow>
                    <CardSubtitleCurriculumInformation>Créditos mínimos:</CardSubtitleCurriculumInformation>
                    <CardSubtitleCurriculumDescription>218</CardSubtitleCurriculumDescription>
                </CardSubtitleContainerRow>
                <CardSubtitleContainerRow>
                    <CardSubtitleCurriculumInformation>Créditos integralizados:</CardSubtitleCurriculumInformation>
                    <CardSubtitleCurriculumDescription>80 (36%)</CardSubtitleCurriculumDescription>
                </CardSubtitleContainerRow>
                <CardSubtitleContainerRow>
                    <CardSubtitleCurriculumInformation>CRA:</CardSubtitleCurriculumInformation>
                    <CardSubtitleCurriculumDescription>8.08</CardSubtitleCurriculumDescription>
                </CardSubtitleContainerRow>
            </CardSubtitleContainer>

            <ProgressBarContainer>
                <ProgressFill width={50}></ProgressFill>
            </ProgressBarContainer>

        </Card>
    )
}

