import { Loading } from "@/components/Loading";
import { AuthContext } from "@/context/authContext";
import { alunoPerfil, Perfil } from "@/services/perfil";
import { Container, HomeTitle, ProfileContainer, SubtitleContainer, SubtitleContainerRow, SubtitleInformation, SubtitleDescription, Gap, SubtitleCurriculumInformation, SubtitleCurriculumDescription, ProgressBarContainer, ProgressFill } from "@/styles/profile";
import { useContext, useEffect, useState } from "react";

export default function Profile() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [perfilInfo, setPerfilInfo] = useState<Perfil>({} as Perfil);

    const {cookie} = useContext(AuthContext);

    useEffect(() => {
        fetchPerfil();
    }, []);

    async function fetchPerfil() {
        setIsLoading(true);

        const data = await alunoPerfil(cookie);
        
        setPerfilInfo(data);

        setIsLoading(false);
    }

    return (
        <Container>
             <HomeTitle>Perfil</HomeTitle>
             {isLoading ? <Loading /> : (
                <ProfileContainer>
                <SubtitleContainer>
                    <SubtitleContainerRow>
                        <SubtitleInformation>Aluno:</SubtitleInformation>
                        <SubtitleDescription>{perfilInfo.aluno}</SubtitleDescription>
                    </SubtitleContainerRow>
                    <SubtitleContainerRow>
                        <SubtitleInformation>Curso:</SubtitleInformation>
                        <SubtitleDescription>{perfilInfo.curso}</SubtitleDescription>
                    </SubtitleContainerRow>
                    <SubtitleContainerRow>
                        <SubtitleInformation>Currículo:</SubtitleInformation>
                        <SubtitleDescription>{perfilInfo.curriculo}</SubtitleDescription>
                    </SubtitleContainerRow>
                    <SubtitleContainerRow>
                        <SubtitleInformation>Situação:</SubtitleInformation>
                        <SubtitleDescription>{perfilInfo.situacao}</SubtitleDescription>
                    </SubtitleContainerRow>
                </SubtitleContainer>
                <HomeTitle>Execução curricular</HomeTitle>
                <Gap/>
                <SubtitleContainer>
                    <SubtitleContainerRow>
                        <SubtitleCurriculumInformation>Carga horária mínima:</SubtitleCurriculumInformation>
                        <SubtitleCurriculumDescription>{perfilInfo.cargaHorariaMinima}</SubtitleCurriculumDescription>
                    </SubtitleContainerRow>
                    <Gap/>
                    <SubtitleContainerRow>
                        <SubtitleCurriculumInformation>Carga horária integralizada:</SubtitleCurriculumInformation>
                        <SubtitleCurriculumDescription>{perfilInfo.cargaHorariaIntegralizada}</SubtitleCurriculumDescription>
                    </SubtitleContainerRow>
                    <Gap/>
                    <SubtitleContainerRow>
                        <SubtitleCurriculumInformation>Créditos mínimos:</SubtitleCurriculumInformation>
                        <SubtitleCurriculumDescription>{perfilInfo.creditosMinimos}</SubtitleCurriculumDescription>
                    </SubtitleContainerRow>
                    <Gap/>
                    <SubtitleContainerRow>
                        <SubtitleCurriculumInformation>Créditos integralizados:</SubtitleCurriculumInformation>
                        <SubtitleCurriculumDescription>{perfilInfo.creditosIntegralizados}</SubtitleCurriculumDescription>
                    </SubtitleContainerRow>
                    <Gap/>
                    <SubtitleContainerRow>
                        <SubtitleCurriculumInformation>CRA:</SubtitleCurriculumInformation>
                        <SubtitleCurriculumDescription>{perfilInfo.cra}</SubtitleCurriculumDescription>
                    </SubtitleContainerRow>
                </SubtitleContainer>
                <ProgressBarContainer>
                    <ProgressFill width={perfilInfo.quantidadePercentual}></ProgressFill>
                </ProgressBarContainer>
            </ProfileContainer>
             )}
        </Container>
    );
}