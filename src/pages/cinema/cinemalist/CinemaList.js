import React, { Component } from "react";

import { Image, FlatList, StyleSheet, Text, View } from "react-native";
import Top from './Top';
import Banner from './Banner';
import List from './List';
export default class CinemaList extends Component {
    
    render() {
        return (
            <View>
                <View style={styles.top}>
                <Top />
                </View>
                <Banner />
                <List />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    top: {
      justifyContent:"center",
    },

  });