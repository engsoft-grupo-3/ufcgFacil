import styled from "styled-components/native";

export const Card = styled.TouchableOpacity`
    width: 100%;
    padding: 16px;

    display: flex;
    flex-direction: column;
    
    margin-bottom: 24px;

    elevation: 5;
    background-color: ${({ theme }) => theme.COLORS.GRAY};
    border-radius: 20px;
`;

export const CardTitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
`;

export const CardSubtitleContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8px;
`;

export const CardSubtitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT_LIGHT_1};
    font-size: 16px;
`;

export const ScheduleText = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-size: 16px;
    letter-spacing: 1.2px;
    text-align: center;    
`;

export const NotificationContainer = styled.View`
    display: flex;
    flex-direction: row;
    column-gap: 8px;

    margin-top: 8px;
`;

export const NotificationText = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-size: 16px;
`;