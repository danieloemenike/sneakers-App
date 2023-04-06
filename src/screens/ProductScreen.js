import { View, Text, FlatList, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
//import products from "../data/products";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProduct } from "../features/productSlice"

const ProductScreen = () => {
  const navigation = useNavigation();
  const products = useSelector(state => state.products.products)
  const dispatch = useDispatch();
 
  return (
    <View>
       <FlatList
        data={ products } keyExtractor={item => item.id}
              renderItem={ ({ item }) => (
            
                <Pressable onPress={ () => {
                  dispatch(setSelectedProduct(item.id))
                  navigation.navigate('Product Details');
                }
                }
                  style={ styles.itemContainer }>
            <Image source={ { uri: item.image } } style={ styles.nikeImage } />
            
          </Pressable>
        )} numColumns={2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    itemContainer: {
      width: '50%',
     padding: 1
      
    },
    nikeImage: {
      width: '100%',
      aspectRatio:1
    },
  });
  

export default ProductScreen