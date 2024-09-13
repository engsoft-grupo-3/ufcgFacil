import { TouchableOpacityProps, View } from "react-native";

import { Card, CardSubtitle, CardSubtitleContainer, CardTitle, NotificationContainer, NotificationText, ScheduleText } from "./styles";
import { FontAwesome } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
    name: string;
    classNumber: string;
    code: string;
    schedule: string;
};

export function ClassCard({ name, classNumber, code, schedule, ...rest }: Props) {
    return (
        <Card {...rest}>
            <CardTitle>{name}</CardTitle>
            <CardSubtitleContainer>
                <CardSubtitle>Turma {classNumber}</CardSubtitle>
                <CardSubtitle>Código: {code}</CardSubtitle>
            </CardSubtitleContainer>

            <View>
                <ScheduleText>{schedule}</ScheduleText>
                {/* <ScheduleText>5 08:00 - 10:00 (CAA 201)</ScheduleText> */}
            </View>
            <NotificationContainer>
                <FontAwesome name="bell" color="#2D1E70" size={20} />
                <NotificationText>Novo email!</NotificationText>
            </NotificationContainer>
        </Card>
    )
}

