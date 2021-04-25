import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import color from '../constants/Color';
import Icon from 'react-native-vector-icons/FontAwesome';

const NavHeading = props => {
  return (
    <View style={styles.navheading}>
      <View
        style={{
          ...styles.iconContainer,
          backgroundColor: color.lightGray,
          top: 5,
          left: 5,
          height: 40,
          width: 40,
        }}>
        <Icon
          name={props.iname}
          size={25}
          color="black"
          onPress={props.onclick}
        />
      </View>
      <Text
        style={{
          fontSize: 30,
          color: color.lightGray,
          fontWeight: 'bold',
          marginLeft: 30,
        }}>
        Today News
      </Text>
      <View
        style={{
          ...styles.iconContainer,
          backgroundColor: color.lightRed,
          top: 5,
          left: 15,
          height: 40,
          width: 40,
        }}>
        <Icon name={props.riname} size={30} color="white" />
      </View>
    </View>
  );
};

const CardView = props => {
  return (
    <View style={styles.list}>
      <View style={styles.vimage}>
        <Image source={{uri: props.imagesource}} style={styles.image} />
      </View>

      <View style={styles.text}>
        <Text
          numberOfLines={1}
          textBreakStrategy="highQuality"
          style={styles.title}>
          {props.title}
        </Text>
        <Text
          numberOfLines={3}
          textBreakStrategy="highQuality"
          style={styles.info}>
          {props.info}
        </Text>
      </View>
      <View style={styles.menuleft}>
        <View style={styles.iconContainer}>
          <Icon name="eye" size={25} color="white" onPress={props.click} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navheading: {
    width: '100%',
    height: 50,
    backgroundColor: color.lightRed,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  list: {
    flexDirection: 'column',
    width: '100%',
    height: 250,
    margin: 1,
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderRadius: 20,
    borderColor: color.lightRed,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
  },
  vimage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 20,
    resizeMode: 'cover',
    margin: 1,
    padding: 5,
  },
  text: {
    flex: 3,
    marginLeft: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {fontSize: 20, fontWeight: 'bold'},
  info: {color: 'gray', fontSize: 14},
  menuleft: {
    right: 0,
    top: 5,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: color.lightRed,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    borderColor: color.lightYellow,
    borderWidth: 1,
  },
  txt: {
    margin: 5,
  },
});
export {NavHeading, CardView};
