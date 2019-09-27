import React, { Component } from "react";

import { Image, FlatList, StyleSheet, Text, View } from "react-native";

export default class Banner extends Component {
    
    render() {
        return (
            <View>
                {/* <Image
                    style={{ width: 480, height: 130 }}
                    source={require('../../assets/img/CinemaList/DiscountTicket.jpg')}
                /> */}
                <Image
                    source={{
                        uri: 'http://movie.miguvideo.com/publish/i_www//image/70/81/783.jpg',
                        method: 'POST',
                        headers: {
                            Pragma: 'no-cache',
                        },
                        body: 'Your Body goes here',
                    }}
                    style={styles.banner}
                />
            </View>
        );
    }

}

var styles = StyleSheet.create({
    banner: {
        width: 480,
        height: 140
    }
});