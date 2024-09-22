import { SplashScreen, Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";

import theme from "@/theme";
import { AuthContextProvider } from "@/context/authContext";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="class" options={{ headerShown: false }} />
        <Stack.Screen name="message" options={{ headerShown: false }} />
        <Stack.Screen name="newEvent" options={{ headerShown: false }} />
      </Stack>
      </AuthContextProvider>
    </ThemeProvider>
  );
}
