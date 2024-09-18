import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform } from "react-native";

export const Container = styled(SafeAreaView)`
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    row-gap: 24px;

    padding: 0px 16px 0px 16px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ProfileContainer = styled.View`
    width: 100%;
    padding: 16px;

    display: flex;
    flex-direction: column;

    background-color: ${({ theme }) => theme.COLORS.GRAY};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    flex: 1;

    /* Android só aceita elevation para fazer sombra */
    ${Platform.select({
  ios: `
      shadow-color: rgba(0, 0, 0, 0.1);
      shadow-offset: {width: 0, height: 4};
      shadow-opacity: 1;
      shadow-radius: 8px;
    `,
  android: `
      elevation: 5;
    `,
})}
`;

export const HomeTitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`;

export const SubtitleContainer = styled.View`
    display: flex;
    margin-bottom: 53px;
`;

export const SubtitleContainerRow = styled.View`
    flex-direction: row;
`;

export const SubtitleDescription = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT_LIGHT_1};
    font-size: 16px;
    margin-left: 8px;
`;

export const SubtitleInformation = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT_DARK};
    font-size: 16px;
    font-weight: bold;
`;

export const Gap = styled.View`
    padding: 4px;
`;

export const SubtitleCurriculumDescription = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT_LIGHT_1};
    font-size: 16px;
    margin-left: 8px;
`;

export const SubtitleCurriculumInformation = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT_DARK};
    font-size: 16px;
    font-weight: bold;
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