import { StyleSheet, Text, View } from 'react-native';
import DownNavigation from './Navigation/Stack/DownNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
  return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <DownNavigation   />
        </SafeAreaView>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:4,
    backgroundColor: '#fff',
  },
});
