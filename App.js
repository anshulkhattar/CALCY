import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={num1:0,num2:0,num3:0}
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.mainview}>
              <Text style={styles.textview}>{this.state.num3}</Text>
          </View>
          <View style={styles.inputview}>
          <TextInput
          keyboardType='numeric'
          keyboardAppearance='light'
          style={{height: 100,color:'#fff',fontSize:25,textAlign:'center'}}
          placeholder="Enter first number"
          onChangeText={(num1) => this.setState({num1})}
          />
          <TextInput
          keyboardType='numeric'
          keyboardAppearance='light'
          style={{height: 100,color:'#fff',fontSize:25,textAlign:'center'}}
          placeholder="Enter second number"
          onChangeText={(num2) => this.setState({num2})}
          />
          </View>
          <View style={styles.buttonview}>
          <Button title="+" onPress={this.calculateSum} style={{padding:10}}></Button>
          <Button title="-" onPress={this.calculateDifference} style={{padding:10}}></Button>
          <Button title="*" onPress={this.calculateProduct} style={{padding:10}}></Button>
          <Button title="/" onPress={this.calculateDivision} style={{padding:10}}></Button>
          </View>
      </View>
    );
  }
  calculateSum = () => {
    const { num1, num2 } = this.state;
  
    this.setState({
      num3: Number(num1) + Number(num2)
    });
  }
  calculateDifference = () => {
    const { num1, num2 } = this.state;
  
    this.setState({
      num3: Number(num1) - Number(num2)
    });
  }
  calculateProduct = () => {
    const { num1, num2 } = this.state;
  
    this.setState({
      num3: Number(num1) * Number(num2)
    });
  }
  calculateDivision = () => {
    const { num1, num2 } = this.state;
  
    this.setState({
      num3: Number(num1) / Number(num2)
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  mainview:{
    flex:1,
    maxHeight:300,
    maxWidth:400,
    marginHorizontal:20,
    marginVertical:40,
    backgroundColor:'#fff',
    alignContent:'center',
    justifyContent:'center'
  },
  textview:{
    textAlign:'center',
    fontSize:120,
    color:'#eee',
    flex:1
  },
  inputview:{
    flex:1,
    maxHeight:200,
    marginHorizontal:20,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonview:{
    flex:1,
    marginHorizontal:20,
    marginVertical:20,
    maxHeight:100
  }
});
