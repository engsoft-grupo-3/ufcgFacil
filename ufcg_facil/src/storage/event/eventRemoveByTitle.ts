import AsyncStorage from "@react-native-async-storage/async-storage";

import { EVENT_COLLECTION } from "../storageConfig";

import { eventsGetAll } from "./eventsGetAll";
import { EventStorageDTO } from "./EventStorageDTO";

export async function eventRemoveByTitle(eventDeleted: EventStorageDTO) {
    try {
        const storedEvents = await eventsGetAll();

        const filteredEvents = storedEvents.filter(event => event.title !== eventDeleted.title);

        await AsyncStorage.setItem(EVENT_COLLECTION, JSON.stringify(filteredEvents))

        await AsyncStorage.removeItem(`${EVENT_COLLECTION}-${eventDeleted}`)
    } catch (error) {
        throw error;
    }
}