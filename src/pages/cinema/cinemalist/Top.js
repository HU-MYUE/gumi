import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Alert
} from 'react-native';


export default class Top extends Component {
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.clickButtonStyle}>
          <Button title={"影片"}  color={'grey'}  onPress={buttonClick} />
          <Button title={"影院"}  color={'red'}/>
        </View>
      </View>




    );
  };
}

const buttonClick = () => {
  Alert.alert("点击了影片按钮");
};

const styles = StyleSheet.create({
  container: {
    
  },
  clickButtonStyle: {
    flexDirection: "row",
    
    width: 60,
    height: 40,

        

    //  backgroundColor: '#E6E6FA',

    //  borderRadius: 10,
    //  borderWidth: 1,
    //  borderColor: '#7FFF00',
  },
});

