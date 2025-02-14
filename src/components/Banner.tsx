import { StyleSheet, Text, View,Dimensions,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
var { width } = Dimensions.get('window');

const colors = ['tomato', 'thistle', 'skyblue', 'teal'];

const Banner:React.FC = () => {
    const [bannerData, setBannerData] = useState<string[]>([]);

    useEffect(() => {
        setBannerData([
          'https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_1280.jpg',
          'https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029_1280.jpg',
          'https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_640.jpg',
          'https://cdn.pixabay.com/photo/2017/08/06/17/58/people-2594683_640.jpg',
          'https://cdn.pixabay.com/photo/2015/04/04/18/51/offer-706850_640.jpg',
          'https://cdn.pixabay.com/photo/2015/04/04/19/08/ten-706887_640.jpg'
        ]);
        return () => {
          setBannerData([]);
        };
      }, []);
    
  return (
    <View style={styles.container}>
      <SwiperFlatList
      autoplay
      autoplayDelay={2}
      autoplayLoop
      index={2}
      showPagination
      data={colors}
      renderItem={({ item }) => (
        <View style={[styles.child, { backgroundColor: item }]}>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
    />
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e7eb',
      },
      swiper: {
        width: 200,
        alignItems: 'center',
        marginTop: 10,
      },
      imageBanner: {
        height: 100,
        width: 100,
        borderRadius: 10,
        marginHorizontal: 20,
      },
      child: { width, justifyContent: 'center' },
      text: { fontSize: width * 0.5, textAlign: 'center' },
})