import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import HomeStack from './routes/HomeStack';
import { loadFonts } from './expo-fonts';
import 'expo-dev-client'
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      await loadFonts();
      setFontsLoaded(true);
    }
    load();
  }, []);
  

  return (
    <>
      <StatusBar hidden />
      {fontsLoaded && <HomeStack/>}
    </>
  );
  
}
