import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

class Profile extends Component {
 render() {
    return (
      <ScrollView>
        <Text style={styles.textProfile}> Perfil </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textProfile: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 300,
  },
});

export default Profile;