import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute,RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../type';
const Details = () => {
    const route = useRoute<RouteProp<RootStackParamList, 'details'>>();
    const {name, description, price} = route.params;
  return (
    <View>
      
      <View style={styles.name}>
        <Text style={styles.nameText}> {name}</Text>
      </View>

      <View>
        <Text style={styles.des}> {description}</Text>
      </View>
      <View style={styles.priceBtn}>
        <Text style={styles.price}>${price}</Text>
        
      </View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    name: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
      },
      des: {
        fontSize: 18,
        color: '#000',
        fontWeight: '700',
        padding: 10,
      },
      priceBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
      },
      price: {
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold',
      }
})