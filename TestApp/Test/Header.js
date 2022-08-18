import React, { useEffect } from 'react';
import {View,StyleSheet,Text} from 'react-native';
import { Button } from 'react-native';
import { callservice } from '../../services/try';

const styles = StyleSheet.create({
    header: {
      paddingTop: 50,
      backgroundColor: 'blue'
    },
    headerText: {
      fontSize: 25,
      color: 'red',
      fontWeight: 'bold',
      paddingHorizontal: 10
    }
  });
  
  const Header = () => {

    useEffect(()=> 
    {
      callservice();
    })
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>I'm a shared component.</Text>
        <Button onPress={fonction}>Essai</Button>
      </View>
    );
  };
  
  export default Header;