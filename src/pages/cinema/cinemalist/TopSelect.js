import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
export default class ToSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statrArr: [{
        title: '影片',
        index: 1,
      }, {
        title: '影院',
        index: 2,
      }],
      activeBtn: 1, //初始选中第一个
    };
  }
  _activeBtn = (index) => {
    this.setState({
      activeBtn: index,
    })
  }

  render() {
    let { statrArr } = this.state;
    return (
      <View style={styles.container}>
        {
          statrArr ? statrArr.map((list, index) => {
            return (
              <View key={index} style={styles.view}><Text style={[styles.btn, list.index === this.state.activeBtn ? styles.activeColor : styles.btn]} onPress={() => {
                this._activeBtn(list.index)
              }}>{list.title}</Text></View>
            )
          }) : ''
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    position: 'relative',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'flex-start',
  },
  view: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'flex-start',
  },
  btn: {
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 1,
    width: 90,
    height: 30,
    textAlign: 'center',
    lineHeight: 30,
    color: 'red',
    fontSize: 15,
  },
  activeColor: {
    backgroundColor: 'red',
    color: '#ffffff',
  },
  button: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    height: 44,
    backgroundColor: '#ffffff',
    color: '#4a4a4a',
    textAlign: 'center',
    lineHeight: 44,
    fontSize: 16,
    fontFamily: 'PingFang-SC-Medium',
  },

})


