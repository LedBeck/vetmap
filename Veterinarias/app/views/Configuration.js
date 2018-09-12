import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

class Configuration extends Component {
 render() {
    return (
      <ScrollView>
        <Text style={styles.textConfiguration}> Configuración </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textConfiguration: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 300,
  },
});

export default Configuration;