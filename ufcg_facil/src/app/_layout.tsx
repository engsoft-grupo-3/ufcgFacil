import { Slot, SplashScreen, Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";

import theme from "@/theme";

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
      <Slot />
    </ThemeProvider>
  );
}
