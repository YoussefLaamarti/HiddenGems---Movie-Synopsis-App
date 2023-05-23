import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
    'Satisfy': require('./assets/fonts/Satisfy-Regular.ttf'),
    'Raleway-Black': require('./assets/fonts/Raleway-Black.ttf'),
    // Add more fonts here as needed
  });
};
