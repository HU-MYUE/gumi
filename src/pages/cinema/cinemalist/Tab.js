import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
 
export default class Tab extends Component{
	render(){
		return(
			<View>
				<ScrollableTabView
					style={styles.container}
					renderTabBar={()=> <DefaultTabBar />}
					tabBarBackgroundColor='#fff'
					tabBarActiveTextColor='#5ebfff'
					tabBarInactiveTextColor='#333'
					tabBarUnderlineStyle={styles.lineStyle}
					>
					<ScrollView tabLabel='日'>
						<Text>日运动</Text>
					</ScrollView>
 
					<ScrollView tabLabel='周'>
						<Text>周运动</Text>
					</ScrollView>
 
					<ScrollView tabLabel='月'>
						<Text>月运动</Text>
					</ScrollView>
 
					<ScrollView tabLabel='年'>
						<Text>年运动</Text>
					</ScrollView>
				</ScrollableTabView>
			</View>
		)
	}
}