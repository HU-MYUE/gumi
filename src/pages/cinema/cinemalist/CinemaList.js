import React, { Component } from "react";

import { Image, FlatList, StyleSheet, Text, View } from "react-native";
import TopSelect from './TopSelect';
import Banner from './Banner';
import List from './List';
export default class CinemaList extends Component {
    
    render() {
        return (
            <View>
                <TopSelect />
                <Banner />
                <List />
            </View>
        );
    }
}