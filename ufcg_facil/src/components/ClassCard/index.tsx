import { View } from "react-native";

import { Card, CardSubtitle, CardSubtitleContainer, CardTitle, NotificationContainer, NotificationText, ScheduleText } from "./styles";
import { FontAwesome } from "@expo/vector-icons";

export function ClassCard() {
    return (
        <Card>
            <CardTitle>Engenharia de Software</CardTitle>
            <CardSubtitleContainer>
                <CardSubtitle>Turma 01</CardSubtitle>
                <CardSubtitle>2024.1</CardSubtitle>
            </CardSubtitleContainer>

            <View>
                <ScheduleText>2 10:00 - 12:00 (CAA 201)</ScheduleText>
                <ScheduleText>5 08:00 - 10:00 (CAA 201)</ScheduleText>
            </View>
            <NotificationContainer>
                <FontAwesome name="bell" color="#2D1E70" size={20} />
                <NotificationText>Novo email!</NotificationText>
            </NotificationContainer>
        </Card>
    )
}

