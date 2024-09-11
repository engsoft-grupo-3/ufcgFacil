import { Container, Header, HeaderTitle, MessageClass, MessageDescription, MessageInfoContainer, MessageTitle, MessageTitleContainer } from "@/styles/message";
import { useRouter } from "expo-router";
import { ArrowLeft, Tag } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export default function Message() {
    const router = useRouter();

    function handleBack() {
        router.back()
    };

    return (
        <Container>
            <Header>
                <TouchableOpacity onPress={handleBack}>
                    <ArrowLeft color="#2D1E70" weight="bold" />
                </TouchableOpacity>
                <HeaderTitle>Mensagem</HeaderTitle>
            </Header>

            <MessageInfoContainer>
                <MessageClass>TEORIA DA COMPUTAÇÃO</MessageClass>
                <MessageTitleContainer>
                    <Tag color="#2D1E70" weight="bold" />
                    <MessageTitle>Informações sobre a monitoria para o segundo estágio</MessageTitle>
                </MessageTitleContainer>
                <MessageDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae natus a iste porro saepe hic necessitatibus magni aliquid obcaecati omnis minima, dolorem explicabo rerum veniam amet fuga? Molestiae, culpa voluptatibus?
                    Sit sunt ut facilis facere error quas odit, repudiandae eos quidem, voluptates suscipit dignissimos incidunt! Aut consectetur sit autem dolor blanditiis quis est, nisi sequi id, modi porro earum amet.</MessageDescription>
            </MessageInfoContainer>
        </Container>
    );
};