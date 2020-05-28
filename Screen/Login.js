import React ,{useState}from 'react';
import { StyleSheet, Text, View , Alert} from 'react-native';
import { TextInput ,Button } from 'react-native-paper';
import SignUp from './Signup';
import PasswordInputText from 'react-native-hide-show-password-input'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';










const  Login=(props) =>{

  const chck =()=> Data.findIndex(item=>{
    if (item.id === ID ){
     
      return true 
    }
else
return false
  })


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
            

<Input placeholder="User ID" secureTextEntry={true}
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
    <Button  icon="login" mode="Outlined" onPress={() => LoginCheck()}>
    Login
  </Button>
  <View style={{alignItems:'center'}}>
    


  </View>
  
  
  </View>
  <View style={{
    flexDirection:'row',
    flex:1,
   margin: 16,
    }}>
    <Text>Sign up</Text>
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