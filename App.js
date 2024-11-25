import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Main } from './components/Main'
import { SafeAreaProvider } from 'react-native-safe-area-context';

//esto ya no es el punto de entrada de la app
// revisar ./app/*
export default function App() {
  return (
    <SafeAreaProvider>
      
      <Main />
      <Text>homelo</Text>
      
    </SafeAreaProvider>
  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
*/