import React from 'react';
import {useContext} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import NewsContext from '../store/contexts/NewsContext';

import color from '../constants/Color';
import {CardView} from '../components/Ui';

const DetailScreen = props => {
  const newsContext = useContext(NewsContext);

  React.useEffect(() => {}, []);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.simage}
        source={{uri: newsContext.newsDetail.urlToImage}}
      />
      <View style={styles.vt}>
        <View style={{flexDirection: 'column'}}>
          <Text style={{color: 'gray', fontSize: 16, textAlign: 'center'}}>
            Auther :
          </Text>
          <Text style={{color: 'gray', fontSize: 16}}>
            {newsContext.newsDetail.author}
          </Text>
        </View>
        <View>
          <Text style={{color: 'gray', fontSize: 16, textAlign: 'center'}}>
            Published At :
          </Text>
          <Text style={{color: 'gray', fontSize: 16}}>
            {newsContext.newsDetail.publishedAt}
          </Text>
        </View>
      </View>
      <View>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          {newsContext.newsDetail.title}
        </Text>
      </View>
      <View>
        <Text style={{color: 'gray', fontSize: 16}}>
          {newsContext.newsDetail.description}
        </Text>
      </View>
      <View>
        <Text style={{color: 'gray', fontSize: 16}}>
          {newsContext.newsDetail.content}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lighGray,
  },
  simage: {
    height: '50%',
    width: '100%',
    resizeMode: 'cover',
  },
  vt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scrollView: {
    marginHorizontal: 1,
    padding: 2,
  },
});
export default DetailScreen;
