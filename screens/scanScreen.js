
import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';



export default class ScanScreen extends React.Component {
    constructor(){
      super();
      this.state={
        hasCameraPermission:  null,
        scanned : false,
        scannedData :"",
        buttonState :"normal"
      }
    }
    getCameraPermission = async ()=>{
        const{status}=await Permissions.askAsync(Permissions.CAMERA);
        this.setState( {
            hasCameraPermission:status==="granted",
            buttonState:"clicked"
          })
    }

    handleBarCodeScan = async ({type,data})=>{
        var buttonState = this.state.buttonState;
        if(buttonState==="clicked"){
          this.setState({
            scanned:true,
            scannedData : data,
            buttonState:"normal"
          })
        }
    
      }
      
    render() {
        const hasCameraPermission = this.state.hasCameraPermission;
        const scanned = this.state.scanned;
        const buttonState = this.state.buttonState;
        if(buttonState!=='normal' && hasCameraPermission){
          return(
            <BarCodeScanner onBarCodeScanned={
              scanned?undefined:this.handleBarCodeScanned
            }
            />
    
          )
          
        }
        else if (buttonState==="normal"){
            
      return (
        <View style={styles.container}>
         
          <Image
          source ={
            require("../assets/camera.jpg")
          }

          style={{width:200,height:200}}
          />
          <Text style={{textAlign:"center",fontSize:30}}>
            hasCameraPermission===true? this.state.scannedData:"Requesting Camera Permission"
          </Text>
            <TouchableOpacity style={styles.scanButton} 
            onPress={()=>{
              this.getCameraPermission()

            }}>
              <Text style={styles.buttonText}>
                Scan
              </Text>
            </TouchableOpacity>

        </View>
      );
    
        }
}
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    displaytext:{
      fontSize:15,
      textDecorationLine:'underline'
    },
    scanButton:{
      backgroundColor:'red',
      padding:10,
      margin:10
    },
    buttonText:{
      fontSize:15,
      textAlign:'center',
      marginTop:10
    },
    scanButton:{
      backgroundColor:'#66BB6A',
      width:50,
      borderWidth:1.5,
      borderLeftWidth:0
    }
})
