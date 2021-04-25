import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import NewsContext from '../store/contexts/NewsContext';
import {CardView, NavHeading} from '../components/Ui';

import color from '../constants/Color';

const HomeScreen = props => {
  const newsContext = useContext(NewsContext);

  const getAllData = () => {
    newsContext.getNews();
  };

  React.useEffect(() => {
    getAllData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.vimage}>
        <Image
          style={styles.simage}
          source={{uri: 'https://i.ytimg.com/vi/A1LtAYGom9Y/maxresdefault.jpg'}}
        />
        <NavHeading iname="bars" riname="home" />
      </View>
      <View style={styles.cview}>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
            fontWeight: 'bold',
            marginLeft: 30,
          }}>
          Top News
        </Text>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          {newsContext.allNews.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  newsContext.setNewsDetail(item);
                  props.navigation.navigate('Detail');
                }}>
                <CardView
                  key={index}
                  imagesource={item.urlToImage}
                  title={item.title}
                  info={item.description}
                  click={() => {
                    newsContext.setNewsDetail(item);
                    props.navigation.navigate('Detail');
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lighGray,
  },
  vimage: {
    flex: 1,
    backgroundColor: color.lightGray,
  },
  simage: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
  },
  cview: {
    flex: 3,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: color.lightRed,
  },
  scrollView: {
    backgroundColor: color.lightGray,
    marginHorizontal: 1,
    padding: 2,
  },
});
export default HomeScreen;
