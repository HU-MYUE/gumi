import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions
} from 'react-native';
 
//获取设备的宽度和高度
var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');
 
export default class NaviBar extends Component {
  componentWillMount() {
    //通过属性得知哪个导航按钮是当前的导航也，这个导航按钮将用灰色背景
    this.buttonColors = this.props.naviBarStatus.map(
      function(aNumber) {
        if (aNumber == 0) return 'white';
        return 'red';
      }
    );
  }
 
  //四个按钮被按下时处理函数
  _naviTab0Pressed() {
    this.props.onNaviBarPress(0);
  }
 
  _naviTab1Pressed() {
    this.props.onNaviBarPress(1);
  }
 
  render() {
    return (
    //根View
    <View style={styles.naviRow}>
      <TouchableHighlight onPress={this._naviTab0Pressed.bind(this)}>
          <View style={[styles.button,{backgroundColor:this.buttonColors[0]}]}>
              <Text style={styles.textStyle1}>
                  影片
              </Text>
          </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={this._naviTab1Pressed.bind(this)}>
          <View style={[styles.button,{backgroundColor:this.buttonColors[1]}]}>
              <Text style={styles.textStyle1}>
                  影院
              </Text>
          </View>
      </TouchableHighlight>
    </View>
    );
  }
}
 
//样式
const styles = StyleSheet.create({
  naviRow: {
      flexDirection: 'row',
      justifyContent: "center",
      alignItems:'flex-start', 
  },
  button: {
     // width: deviceWidth / 2, //导航栏每个标签宽度为屏幕1/4
      height: 35,
      width: 65,
      position: 'relative',
      flexDirection: "row",
      justifyContent: "center",
      alignItems:'flex-start', 
  },
  textStyle1: {
      fontSize: 20,
      textAlign: 'center',
  }
});