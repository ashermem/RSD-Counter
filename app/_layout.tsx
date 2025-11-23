import { Stack } from "expo-router";
// Required for CSS to work on Expo Web.
import './strict.css';
// Required for Fast Refresh to work on Expo Web
import '@expo/metro-runtime';

export default function RootLayout() {
  return <Stack />;
}
