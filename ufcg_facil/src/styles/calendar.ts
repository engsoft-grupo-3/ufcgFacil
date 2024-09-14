import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0px 16px 0px 16px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const PageTitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 24px;
`;

export const FABContainer = styled.View`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

export const FAB = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  width: 56px;
  height: 56px;
  border-radius: 28px;
  justify-content: center;
  align-items: center;

  elevation: 5;
`;

export const DateText = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
`;