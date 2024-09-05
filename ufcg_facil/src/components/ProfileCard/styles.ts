import styled from "styled-components/native";

export const Card = styled.View`
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
    text-align: center;
`;

export const CardSubtitleContainer = styled.View`
    display: flex;
    margin-bottom: 53px;
`;

export const CardSubtitleContainerRow = styled.View`
    flex-direction: row;
`;

export const CardSubtitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT_LIGHT_1};
    font-size: 16px;
`;

export const CardSubtitleDescription = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT_LIGHT_1};
    font-size: 16px;
    margin-left: 8px;
`;

export const CardSubtitleInformation = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT_DARK};
    font-size: 16px;
    font-weight: bold;
`;

export const CardSubtitleCurriculumDescription = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT_LIGHT_1};
    font-size: 16px;
    margin-left: 8px;
`;

export const CardSubtitleCurriculumInformation = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT_DARK};
    font-size: 16px;
    font-weight: bold;
`;

export const ScheduleText = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-size: 16px;
    letter-spacing: 1px;
    text-align: center;    
`;

export const ProgressBarContainer = styled.View`
  width: 100%;
  height: 15px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 50px; /* Makes the ends rounded */
`;

export const ProgressFill = styled.View`
  width: ${props => props.width}%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.BASE_DARK};
  border-radius: 50px; /* Makes the ends rounded */
`;