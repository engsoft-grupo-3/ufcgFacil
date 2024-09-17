import { StyleSheet, Text, View } from "react-native";
import { Container, HomeTitle, ProfileContainer, SubtitleContainer, SubtitleContainerRow, SubtitleInformation, SubtitleDescription, Gap, SubtitleCurriculumInformation, SubtitleCurriculumDescription, ProgressBarContainer, ProgressFill } from "@/styles/profile";

export default function Profile() {

    return (
        <Container>
             <HomeTitle>Perfil</HomeTitle>
                <ProfileContainer>
                    <SubtitleContainer>
                        <SubtitleContainerRow>
                            <SubtitleInformation>Aluno:</SubtitleInformation>
                            <SubtitleDescription>120110375 GABRIEL HENRIQUE LOPES</SubtitleDescription>
                        </SubtitleContainerRow>
                        <SubtitleContainerRow>
                            <SubtitleInformation>Curso:</SubtitleInformation>
                            <SubtitleDescription>2024.1</SubtitleDescription>
                        </SubtitleContainerRow>
                        <SubtitleContainerRow>
                            <SubtitleInformation>Currículo:</SubtitleInformation>
                            <SubtitleDescription>2023</SubtitleDescription>
                        </SubtitleContainerRow>
                        <SubtitleContainerRow>
                            <SubtitleInformation>Situação:</SubtitleInformation>
                            <SubtitleDescription>Regular</SubtitleDescription>
                        </SubtitleContainerRow>
                    </SubtitleContainer>
                    <HomeTitle>Execução curricular</HomeTitle>
                    <Gap/>
                    <SubtitleContainer>
                        <SubtitleContainerRow>
                            <SubtitleCurriculumInformation>Carga horária mínima:</SubtitleCurriculumInformation>
                            <SubtitleCurriculumDescription>3270</SubtitleCurriculumDescription>
                        </SubtitleContainerRow>
                        <Gap/>
                        <SubtitleContainerRow>
                            <SubtitleCurriculumInformation>Carga horária integralizada:</SubtitleCurriculumInformation>
                            <SubtitleCurriculumDescription>1200 (36%)</SubtitleCurriculumDescription>
                        </SubtitleContainerRow>
                        <Gap/>
                        <SubtitleContainerRow>
                            <SubtitleCurriculumInformation>Créditos mínimos:</SubtitleCurriculumInformation>
                            <SubtitleCurriculumDescription>218</SubtitleCurriculumDescription>
                        </SubtitleContainerRow>
                        <Gap/>
                        <SubtitleContainerRow>
                            <SubtitleCurriculumInformation>Créditos integralizados:</SubtitleCurriculumInformation>
                            <SubtitleCurriculumDescription>80 (36%)</SubtitleCurriculumDescription>
                        </SubtitleContainerRow>
                        <Gap/>
                        <SubtitleContainerRow>
                            <SubtitleCurriculumInformation>CRA:</SubtitleCurriculumInformation>
                            <SubtitleCurriculumDescription>8.08</SubtitleCurriculumDescription>
                        </SubtitleContainerRow>
                    </SubtitleContainer>
                    <ProgressBarContainer>
                        <ProgressFill width={50}></ProgressFill>
                    </ProgressBarContainer>
                </ProfileContainer>
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