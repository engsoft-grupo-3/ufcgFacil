import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;

    display: flex;

    padding: 0px 16px 0px 16px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-bottom: 24px;
    position: relative;
`;

export const HeaderTitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-weight: bold;
    position: absolute;
    left: 35%;
    font-size: 20px;
`;

export const MessageInfoContainer = styled.View`
    flex: 1;
    display: flex;
    flex-direction: column;
    row-gap: 16px;

    padding: 8px 16px;
    
    elevation: 1;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;

    background-color: ${({ theme }) => theme.COLORS.GRAY};
`;

export const MessageClass = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-weight: bold;
    font-size: 16px;
    text-align: center;
`;

export const MessageTitleContainer = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    column-gap: 8px;
    align-items: center;
`;

export const MessageTitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-weight: bold;
    font-size: 16px;
`;

export const MessageDescription = styled.Text`
    color: black;
    font-weight: regular;
    font-size: 14px;
    line-height: 21px;
`;