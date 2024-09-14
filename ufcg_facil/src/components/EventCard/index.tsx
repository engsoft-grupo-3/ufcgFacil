import { useState } from "react";

import { FastForwardCircle, TrashSimple } from "phosphor-react-native";
import { Card, DescriptionText, FirstRow, FirstRowText, RemoveButton, TitleText } from "./styles";

type Props = {
    className: string;
    title: string;
    description: string;
    date: Date;
    removeEvent: () => void;
}

export function EventCard({ className, title, description, date, removeEvent }: Props) {
    const [isExpanded, setIsExpanded] = useState(false);

    function toggleExpand() {
        setIsExpanded(prevState => !prevState);
    }

    const truncatedDescription = !isExpanded ? `${description.slice(0, 30)}...` : description;

    return (
        <Card onPress={toggleExpand}>
            <FirstRow>
                <FirstRowText>{date}</FirstRowText>
                <FastForwardCircle size={16} weight="bold" color="#2D1E70" />
                <FirstRowText>{className}</FirstRowText>
            </FirstRow>
            <TitleText>{title}</TitleText>
            <DescriptionText>{truncatedDescription}</DescriptionText>
            {!isExpanded ? (
                <RemoveButton onPress={removeEvent}>
                    <TrashSimple color="#2D1E70" weight="bold" />
                </RemoveButton>
            ) : ""
            }

        </Card>
    )
}