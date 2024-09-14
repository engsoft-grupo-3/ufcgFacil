import AsyncStorage from "@react-native-async-storage/async-storage";
import { EVENT_COLLECTION } from "../storageConfig";

import { EventStorageDTO } from './EventStorageDTO';

export async function eventsGetAll() {
    try {
        const storage = await AsyncStorage.getItem(EVENT_COLLECTION);

        const events: EventStorageDTO[] = storage ? JSON.parse(storage) : [];

        return events;
    } catch (error) {
        throw error;
    }
}