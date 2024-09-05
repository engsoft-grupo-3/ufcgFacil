import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform } from "react-native";

export const Container = styled(SafeAreaView)`
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 64px;

    padding: 32px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ProfileCard = styled.View`
    width: 100%;
    padding: 16px;

    display: flex;
    flex-direction: column;
    row-gap: 32px;

    background-color: ${({ theme }) => theme.COLORS.GRAY};
    border-radius: 8px;

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

export const SupportText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;