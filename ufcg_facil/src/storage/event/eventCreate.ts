import AsyncStorage from "@react-native-async-storage/async-storage";

import { EVENT_COLLECTION } from "../storageConfig";

import { eventsGetAll } from "./eventsGetAll";
import { EventStorageDTO } from "./EventStorageDTO";

export async function eventCreate(newEvent: EventStorageDTO) {
    try {
        const storedEvents = await eventsGetAll();

        const storage = JSON.stringify([...storedEvents, newEvent]);

        await AsyncStorage.setItem(EVENT_COLLECTION, storage);
    } catch (error) {
        throw error;
    }
}