import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Alert
} from 'react-native';
import Banner from './Banner'

export default class Top extends Component {
  handle() {
    const w = window.open('about:blank');
    w.location.href = './Banner'
  }
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.clickButtonStyle}>
          <Button title={"影片"} color={'grey'} onPress={buttonClick} />
          <Button title={"影院"} color={'red'}  onClick={this.handle}/>
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

