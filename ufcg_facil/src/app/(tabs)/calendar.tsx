import { useCallback, useState } from "react";
import { SectionList, View } from "react-native";
import { useFocusEffect, useRouter } from "expo-router";

import groupBy from 'lodash.groupby';
import { format } from "date-fns";
import { pt } from 'date-fns/locale'

import { Loading } from "@/components/Loading";
import { EventCard } from "@/components/EventCard";

import { eventRemoveByTitle } from "@/storage/event/eventRemoveByTitle";
import { eventsGetAll } from "@/storage/event/eventsGetAll";
import { EventStorageDTO } from "@/storage/event/EventStorageDTO";

import { ClipboardText, Plus } from "phosphor-react-native";
import { Container, DateText, EmptyListContainer, EmptyListText, FAB, FABContainer, PageTitle } from "@/styles/calendar";

type sectionListEvents = {
    title: string,
    data: EventStorageDTO[]
}

export default function Calendar() {
    const [isLoading, setIsLoading] = useState(true);
    const [sectionListEvents, setSectionListEvents] = useState<sectionListEvents[]>([
    ]);

    const router = useRouter();

    function handleNewEvent() {
        router.push("/newEvent");
    }

    async function fetchEvents() {
        try {
            setIsLoading(true);

            const data = await eventsGetAll();

            const groupedEvents = Object.values(
                groupBy(data, (event) => event.date.substring(0, 10))
            );

            const sections: sectionListEvents[] = groupedEvents.map(d => {
                const parts: string[] = d[0].date.split("/");
                const day: number = parseInt(parts[0]);
                const month: number = parseInt(parts[1]) - 1;
                const year: number = parseInt(parts[2]);

                return {
                    title: format(new Date(year, month, day), 'PPP', { locale: pt }),
                    // @ts-ignore
                    data: [...d]
                };
            });

            setSectionListEvents(sections);

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useFocusEffect(useCallback(() => {
        fetchEvents();
    }, []));

    async function handleRemoveEvent(event: EventStorageDTO) {
        try {
            await eventRemoveByTitle(event);
            fetchEvents();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <PageTitle>Agenda</PageTitle>
            {isLoading ? <Loading /> : (
                <SectionList
                    style={{ width: "100%" }}
                    sections={sectionListEvents}
                    keyExtractor={item => item.description}
                    renderItem={({ item }) => (
                        <EventCard
                            className={item.className}
                            title={item.title}
                            description={item.description}
                            date={item.date}
                            removeEvent={() => handleRemoveEvent(item)}
                        />
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <DateText>
                            {title}
                        </DateText>
                    )}
                    ListEmptyComponent={(
                        <EmptyListContainer>
                            <ClipboardText size={64} color="#808080" />
                            <EmptyListText>
                                Comece a sua agenda!{"\n"}Marque o primeiro evento!
                            </EmptyListText>
                        </EmptyListContainer>
                    )}
                />
            )}
            <FABContainer>
                <FAB onPress={handleNewEvent}>
                    <Plus size={24} color="#fff" />
                </FAB>
            </FABContainer>
        </Container>
    );
}