import React from 'react';
import {View,StyleSheet,Text} from 'react-native';



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
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>I'm a shared component.</Text>
      </View>
    );
  };
  
  export default Header;