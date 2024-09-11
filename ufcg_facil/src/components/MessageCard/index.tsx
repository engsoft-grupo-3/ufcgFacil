import { DotsThree } from "phosphor-react-native";
import { Container, Class, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps;

export function MessageCard({ ...rest }: Props) {
    return (
        <Container {...rest}>
            <DotsThree weight="bold" size={18} color="#2D1E70" />
            <Class>ENGENHARIA DE SOFTWARE</Class>
            <Title>O que vai ser discutido em sala hoje</Title>
        </Container>
    )
}