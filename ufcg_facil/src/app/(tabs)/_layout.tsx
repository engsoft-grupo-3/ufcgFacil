import { Tabs } from "expo-router";
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveBackgroundColor: "#2D1E70",
            tabBarInactiveBackgroundColor: "#2D1E70",
            tabBarStyle: { height: 80 }
        }} >
            <Tabs.Screen name="home" options={{
                headerShown: false,
                tabBarShowLabel: false,

                tabBarIcon: ({ color }) => {
                    return <FontAwesome name="home" color={color} size={30} />

                }
            }} />
            <Tabs.Screen name="calendar" options={{
                headerShown: false,
                tabBarShowLabel: false,

                tabBarIcon: ({ color, size }) => {
                    return <FontAwesome name="calendar-o" color={color} size={size} />

                }
            }} />
            <Tabs.Screen name="messages" options={{
                headerShown: false,
                tabBarShowLabel: false,

                tabBarIcon: ({ color, size }) => {
                    return <FontAwesome6 name="message" color={color} size={size} />

                }
            }} />
            <Tabs.Screen name="profile" options={{
                headerShown: false,
                tabBarShowLabel: false,

                tabBarIcon: ({ focused, color, size }) => {

                    if (focused) return <FontAwesome name="user-circle" color={color} size={size} />
                    return <FontAwesome name="user-circle-o" color={color} size={size} />

                }
            }} />
        </Tabs>
    );
}