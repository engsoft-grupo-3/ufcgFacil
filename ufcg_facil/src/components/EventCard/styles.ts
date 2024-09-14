import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Card = styled(TouchableOpacity)`
    width: 100%;
    padding: 16px;

    display: flex;
    flex-direction: column;
    
    margin-bottom: 24px;

    elevation: 5;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.COLORS.GRAY};
    position: relative;
`;

export const FirstRow = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 2px;
`;

export const FirstRowText = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-size: 12px;
    font-weight: bold;
`;

export const TitleText = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-size: 16px;
    font-weight: bold;
`;

export const DescriptionText = styled.Text`
    flex: 1;
    color: ${({ theme }) => theme.COLORS.TEXT_LIGHT_1};
    margin-right: 10px;
    font-size: 12px;
    
`;

export const RemoveButton = styled(TouchableOpacity)`
    position: absolute;
    right: 20px;
    top: 60%
`;