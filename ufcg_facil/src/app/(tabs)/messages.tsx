import { MessageCard } from "@/components/MessageCard";
import { Container, MessageCardsContainer, MessagesTitle } from "@/styles/messages";
import { useRouter } from "expo-router";

export default function Messages() {

    const router = useRouter();

    function handleOpenMessage() {
        router.push('/message');
    }

    return (
        <Container>
            <MessagesTitle>Mensagens</MessagesTitle>
            <MessageCardsContainer>
                <MessageCard onPress={handleOpenMessage} />
                <MessageCard />
                <MessageCard />
            </MessageCardsContainer>

        </Container>
    )
};