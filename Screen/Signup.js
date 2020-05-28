import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';


const SignUp = (props) => {

  const [ID, setID] = useState('')
  const [password, setPassword] = useState('')
  const [number, setNumber] = useState('')
  const [mail, setMail] = useState('')

  const Add =()=>{
     props.route.params.AddData(ID,password)
     
   
  }









  return (
    <View style={styles.container}>


      <TextInput
        label='ID'
        value={ID}
        onChangeText={text => setID(text)}
      />
      <TextInput
        label='password'
        value={password}

        onChangeText={text => setPassword(text)}
      />
      <TextInput
        label='number'
        value={number}

        onChangeText={text => setNumber(text)}
      />
      <TextInput
        label='mail'
        value={mail}
        onChangeText={text => setMail(text)}
      />
      <Button  icon="content-save" mode="Outlined" onPress={()=> Add()}>
      save
  </Button>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});

export default SignUp