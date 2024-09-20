import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;

    display: flex;

    align-items: center;

    padding: 24px 16px 0px 16px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const MessagesTitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 24px;
`;

export const MessageCardsContainer = styled.View`
    width: 100%;
`;