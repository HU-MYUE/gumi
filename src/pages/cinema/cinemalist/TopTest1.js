import React from 'react';
import TabNavigator from 'react-native-tab-navigator';
import { StyleSheet, Text, Button, TextInput, View, Alert, Image } from 'react-native';

export default class TopTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: 'profile'};
  }

  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="最热"
            renderIcon={() => <Image style={styles.image} source={require('../../../assets/img/CinemaList/bangbang.png')} />}
            renderSelectedIcon={() => <Image style={styles.image} source={require('../../../assets/img/CinemaList/binggan.png')} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="趋势"
            renderIcon={() => <Image style={styles.image} source={require('../../../assets/img/CinemaList/boluo.png')} />}
            renderSelectedIcon={() => <Image style={styles.image} source={require('../../../assets/img/CinemaList/guozhi.png')} />}
            onPress={() => this.setState({ selectedTab: 'profile' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  page1: {
    flex: 1,
    backgroundColor: 'red'
  },
  page2: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  image: {
    height: 72,
    width: 22
  }
});