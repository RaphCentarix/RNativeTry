import React from 'react';
import {View,StyleSheet,Text,ScrollView,TextInput} from 'react-native';
import { Platform } from 'react-native';

const Essai = () =>  {



    return ( <View style={styles.container}>
                <ScrollView contentContainerStyle={{
                flexGrow: 1,
                alignItems: 'center',
                flexDirection: 'column',
                }}>
                        <View style={{flexGrow:1 , padding: 10 } }>
                            <Text style={styles.title}>Centarix Login</Text>
                        </View>
                        <View style={{flexGrow:1}}>
                            <TextInput 
                            style={styles.input}
                            maxLength={10}
                            // value={number}
                            // onChangeText={text=> setNumber(text)}
                            placeholder="Input your number"
                            keyboardType="numeric" />
                        </View>
                        <View style={{flexGrow:1}}>
                            <TextInput
                                style={styles.input}
                                maxLength={6}
                                // onChangeText={(text)=> setSmsCode(text)}
                                placeholder="Input your number"
                                keyboardType="numeric" />
                        </View>
                        <View style={{flexGrow:4}}>
                            <Text style={[styles.text,{marginLeft: 25,alignSelf : 'center'}]}>Hello</Text> 
                        </View>
                    </ScrollView>
            </View>
    );
}


const styles =  StyleSheet.create(
    {
        container : {
            flex : 1,
            backgroundColor : 'black',
            height: '100%',
            width : '100%',
        },
        title :
        {
            fontSize : 25,
            marginTop : 30,
            fontWeight : 'bold',
            color : 'white',
        },
        text :
        {
            fontSize:  20,
            height : 30,
            color : 'white'
        },
        input: {
            height: 50,
            width : Platform.select({web : 600 , default : 300}),
            marginTop: 10,
            marginLeft : 50,
            borderRadius: 10,
            borderWidth: 1,
            padding: 10,
            backgroundColor : 'lightgreen',
          },
    });


export default Essai;