import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.GRAY};
    
    
    padding: 8px 16px;
    border-radius: 16px;
    elevation: 2;

    row-gap: 2px;
    flex-direction: column;

    margin-bottom: 16px;
    
`;

export const Class = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-size: 10px;
    font-weight: bold;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 12px;
`;