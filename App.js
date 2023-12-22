import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/AppNavigator';
import { Provider } from 'react-redux';
import MainContainer from './src/MainContainer';
import store from './src/redux/store/Store';

export default function App() {
  return (
    <Provider store={store}>
      <MainContainer/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
