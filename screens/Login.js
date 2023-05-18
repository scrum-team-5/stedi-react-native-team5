import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Login(props) {
  return (
    <View style={styles.login}>
      <Text>This is the Login Screen</Text>

      <Button
        title="Seth Button"
        onPress={() => console.log('Hello Seth!')}
      ></Button>

      <Button
        title="Matias Button"
        onPress={() => console.log('Hello Matias!')}
      ></Button>

      <Button
        title="Alejandro Button"
        onPress={() => console.log('Hello Alejandro!')}
      ></Button>

      <Button
        title="Cristhians Button"
        onPress={() => console.log('Hello Cristhians!')}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: 'green',
    height: '12%',
    alignItems: 'flex-end',
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  }
});
