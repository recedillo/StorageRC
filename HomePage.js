import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <Text style={styles.SDSCtext}>SDSC</Text>
        <Text style={styles.buttonText}> About </Text>
        <Text style={styles.buttonText}> People </Text>
        <Text style={styles.buttonText}> Alumni </Text>
        <Text style={styles.buttonText}> Summer Program </Text>
        <Text style={styles.buttonText}> Contact Us </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  headerBar: {
    borderWidth: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'black',
  },
  SDSCtext: {
    color: "red",
    fontStyle: "Mark Regular",
    marginRight: 5,
    marginLeft: 5,
  },
  buttonText: {
    marginLeft: 20,
    color: "white",
  }
});