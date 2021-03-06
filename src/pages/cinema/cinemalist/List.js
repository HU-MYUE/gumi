import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class List extends Component {
  render() {
    return (
      <View >
        <FlatList
          data={[
            {
              id: '1', cinemaName: '中影泰得影城（缤纷店）', moviePrice: '35.9',
              cinameLocation: '高新区锦业路与丈八二路十字东北角绿地缤纷荟4层2201', cinemaDistance: '0.7', cinemaLabel: '3D眼镜', cinemaLabel1: '可停车'
            },
            {
              id: '2', cinemaName: '大地影院（西安人人乐）', moviePrice: '29',
              cinameLocation: '雁塔区电子一路18号栗园商业广场6楼', cinemaDistance: '4.3', cinemaLabel: '可停车'
            },
            {
              id: '3', cinemaName: '大地影院（西安人人乐）', moviePrice: '29',
              cinameLocation: '雁塔区电子一路18号栗园商业广场6楼', cinemaDistance: '4.3', cinemaLabel: '可停车'
            },
            {
              id: '4', cinemaName: '大地影院（西安人人乐）', moviePrice: '29',
              cinameLocation: '雁塔区电子一路18号栗园商业广场6楼', cinemaDistance: '4.3', cinemaLabel: '可停车'
            },
            {
              id: '5', cinemaName: '大地影院（西安人人乐）', moviePrice: '29',
              cinameLocation: '雁塔区电子一路18号栗园商业广场6楼', cinemaDistance: '4.3', cinemaLabel: '可停车'
            },
            {
              id: '6', cinemaName: '大地影院（西安人人乐）', moviePrice: '29',
              cinameLocation: '雁塔区电子一路18号栗园商业广场6楼', cinemaDistance: '4.3', cinemaLabel: '可停车'
            },
            {
              id: '7', cinemaName: '大地影院（西安人人乐）', moviePrice: '29',
              cinameLocation: '雁塔区电子一路18号栗园商业广场6楼', cinemaDistance: '4.3', cinemaLabel: '可停车'
            },
            {
              id: '8', cinemaName: '大地影院（西安人人乐）', moviePrice: '29',
              cinameLocation: '雁塔区电子一路18号栗园商业广场6楼', cinemaDistance: '4.3', cinemaLabel: '可停车'
            },
            {
              id: '9', cinemaName: '大地影院（西安人人乐）', moviePrice: '29',
              cinameLocation: '雁塔区电子一路18号栗园商业广场6楼', cinemaDistance: '4.3', cinemaLabel: '可停车'
            },
            {
              id: '10', cinemaName: '大地影院（西安人人乐）', moviePrice: '29',
              cinameLocation: '雁塔区电子一路18号栗园商业广场6楼', cinemaDistance: '4.3', cinemaLabel: '可停车'
            },
            {
              id: '11', cinemaName: '大地影院（西安人人乐）', moviePrice: '29',
              cinameLocation: '雁塔区电子一路18号栗园商业广场6楼', cinemaDistance: '4.3', cinemaLabel: '可停车'
            },


          ]}
          renderItem={({ item }) =>
            <View style={styles.cinema}>

              <View style={styles.viewdetail}>

                <Text style={styles.cinemaName}>{item.cinemaName}</Text>
                <Text style={styles.moviePrice}>￥{item.moviePrice}起</Text>

              </View>


              <View style={styles.viewdetail}>
                {item.cinameLocation.length > 23 ? <Text style={styles.cinameLocation}>{item.cinameLocation.substring(0, 23)}...</Text> : <Text style={styles.cinameLocation}>{item.cinameLocation}</Text>}
                <Text style={styles.cinemaDistance}>{item.cinemaDistance}km</Text>
              </View>
              <View style={styles.viewdetail1}>
                
                <Text style={styles.cinemaLabel}>{item.cinemaLabel}</Text>
                {item.cinemaLabel1 ? <Text style={styles.cinemaLabel1}>{item.cinemaLabel1}</Text>:<Text></Text> }
              </View>
            </View>

          }
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  cinema: {
    marginTop: 2,
    marginBottom: 2,
    borderBottomWidth: 1,
    //borderBottomStyle: solid,
    borderBottomColor: '#e7e7e7',
    //boxSizing: boderBox,无法识别 
    //display: block,无法识别 
  },
  viewdetail: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 10,
  },
  viewdetail1: {
    flexDirection: "row",
    marginBottom: 10,
    marginLeft:10,
    marginRight:100,
  },

  cinemaName: {
    textAlign: "left",
    color: '#666',
    fontSize: 16,
    //boxSizing: boderBox,无法识别 
    //display: block,无法识别 
  },
  moviePrice: {
    textAlign: "right",
    color: 'red',
    fontSize: 10,

    //justifyContent: "flex-end",不生效
  },
  cinemaLocation: {

    color: '#666',
    fontSize: 14,
    textAlign: "left",
    //justifyContent: "flex-end",不生效
  },
  cinemaDistance: {

    color: '#666',
    fontSize: 10,
    textAlign: "right",
    //justifyContent: "flex-end",不生效
  },
  cinemaLabel: {
    flexDirection: "row",
    width: 55,
    color: '#F8F8FF',
    backgroundColor: '#A9A9A9',
    fontSize: 10,
    borderColor: '#A9A9A9',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 2,
    textAlign: "center",
    marginTop: 1,
    marginBottom: 10,
    marginLeft: 10,
    //justifyContent: "flex-end",

  },
  cinemaLabel1: {
    flexDirection: "row",
    width: 55,
    color: '#000000',
    backgroundColor: '#F8F8FF',
    fontSize: 10,
    borderColor: '#A9A9A9',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 2,
    textAlign: "center",
    marginTop: 1,
    marginBottom: 10,
    marginRight: 10,
    //justifyContent: "flex-end",

  }
});