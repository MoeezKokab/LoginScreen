import React ,{useState}from 'react';
import { StyleSheet, View , Alert} from 'react-native';
import { Button } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';










const  Login=(props) =>{

  


  const [Data,SetData] =useState([{id:'moeez',password:'moeez'},{id:'moeez',password:'Moeez'}])

  const AddData =(id,password)=>{
    if(!Data.find(Element=>Element.id === id )){
      props.navigation.goBack()
      SetData(preItem =>{
        return [{ id , password },...preItem]
          
      }
      )
     

     }
     else{Alert.alert('try other id')}
     


    
   

  }
 
// checking enter login id and password  

  const LoginCheck =()=>{
    if(Data.find(Element=>Element.id === ID && Element.password === password)){
  
     return props.navigation.navigate('Home')
    }
    Alert.alert('Enter invalid password or id')
    
    }
const [ID,setID]=useState('')
const [password,setPassword]=useState("")
    return (
    <View style={styles.container}>
            

<Input placeholder="User ID" 
  label='ID'
  value={ID}
  onChangeText={text =>setID(text )}
      leftIcon={
        <Icon
          name='user'
          size={24}
          color='black'
        />
      } />
     
     <Input placeholder="Password" secureTextEntry={true}
       label='Password'
       value={password}
       onChangeText={text =>setPassword(text )}
      leftIcon={
        <Icon
          name='lock'
          size={24}
          color='black'
        />
      } />
    <View style={{alignItems:'center'}}>
   
  <View style={{alignItems:'center'}}>
    


  </View>
  
  
  </View>
  <View style={{
    flexDirection:'row',
    flex:1,
   margin: 16,
   alignContent:'space-around',
   justifyContent:"space-around"
    }}>
    <Button  icon="login" mode="Outlined" onPress={() => LoginCheck()}>
    Login
  </Button>
    <Button  icon="login" mode="Outlined" onPress={()=> props.navigation.navigate('Signup',{AddData:AddData})} style={{marginTop:-9,marginLeft:70}}>
      SignUp
  </Button>
  </View>
        
    </View>
    )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor:'#dff4f7',
   
   
  },
  
});





export default  Login ;