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
`;

export const HeaderTitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-weight: bold;
    margin: 0 auto;
    font-size: 20px;
`;

export const ClassInfoContainer = styled.View`
    display: flex;
    flex-direction: column;

    margin-bottom: 24px;
`;

export const ClassInfoText = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-weight: 500;
`;

export const GradesTitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-weight: bold;
    font-size: 22px;
    letter-spacing: 2px;
    text-align: center;
    margin-bottom: 4px;
`;

export const GradesCard = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GRAY};
    border-radius: 16px;
    padding: 8px 16px;
    elevation: 2;
    
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between; 
`;


export const GradesInfo = styled.View`
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 16px;
    padding: 8px;
    width: 27%;
    margin-top: 8px;
    margin-bottom: 8px; 
    align-items: center; 
`;

export const GradesInfoTitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-weight: bold;
    font-size: 16px;
    text-align: center;
`;

export const GradesInfoNumber = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-weight: bold;
    font-size: 20px;
`;

export const MessagesTitle = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 4px;
    margin-top: 140px;
    margin-bottom: 12px;
    text-align: center;
`;

export const MessagesTitleText = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-weight: bold;
    font-size: 20px;
`;

export const MessagesContainer = styled.ScrollView.attrs(() => ({
    showsVerticalScrollIndicator: false
}))`
    width: 100%;
`;