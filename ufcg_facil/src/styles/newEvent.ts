import { TextInput, TextInputProps, TouchableOpacity } from "react-native";
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
    margin-left: 100px;
    font-size: 20px;
`;

export const InputTitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 8px;
`;

interface InputProps extends TextInputProps {
    numberOfLines?: number;
}

export const Input = styled(TextInput).attrs<InputProps>(({ theme, numberOfLines }) => ({
    placeholderTextColor: theme.COLORS.TEXT_LIGHT_1,
    textAlignVertical: numberOfLines && numberOfLines > 1 ? 'top' : 'center',
})) <InputProps>`
    padding: 12px 18px;
    elevation: 2;
    border-radius: ${({ numberOfLines }) => (numberOfLines && numberOfLines > 1 ? 30 : 50)}px;
    background-color: ${({ theme }) => theme.COLORS.GRAY};

  `;

export const AddEventButton = styled(TouchableOpacity)`
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    border-radius: 100px;
    width: 100%;
    padding: 16px 0;
    margin-top: auto;
    margin-bottom: 16px;
  `;

export const ButtonText = styled.Text`
color: ${({ theme }) => theme.COLORS.WHITE};
font-size: 16px;
font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

text-align: center;
`;

export const InputContainer = styled.View`
    margin-bottom: 16px;
`;

export const ErrorText = styled.Text`
    color: red;
    font-weight: bold;
    font-size: 12px;
`;