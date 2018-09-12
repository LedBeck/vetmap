import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

class Notifications extends Component {
 render() {
    return (
      <ScrollView>
        <Text style={styles.textNotifications}> Notificaciones </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textNotifications: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 300,
  },
});

export default Notifications;