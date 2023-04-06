import React from 'react';
import { View, FlatList, StyleSheet, Text, Pressable } from 'react-native';
import cart from "../data/cart"
import CartListItem from '../components/CartListItem';
import { useSelector } from 'react-redux';
import { selectDeliveryPrice, selectSubTotal, selectTotal } from '../features/cartSlice';

export default function ShoppingCart() {
    const subtotal = useSelector(selectSubTotal)
    const cartItems = useSelector(state => state.cart.items)
    const selectDelivery = useSelector(selectDeliveryPrice)
    const totalPrice = useSelector(selectTotal)
    
  return (
    <>
          <FlatList
              data={ cartItems } renderItem={ ({ item }) => (
                  <CartListItem cartItem={item} />
              ) }
              ListFooterComponent={() => (
                  <View style={styles.totalContainer}>
                      
                      <View style = {styles.row}>
                          <Text style={styles.text}>
                              SubTotal
                          </Text>
                        <Text style={styles.text}> $ {subtotal}</Text>
                      </View>

                      <View style = {styles.row}>
                          <Text style={styles.text}>
                              Delivery
                          </Text>
                        <Text style={styles.text}> {selectDelivery}$</Text>
                      </View>

                      <View style = {styles.row}>
                          <Text style={styles.textBold}>
                              Total
                          </Text>
                          <Text style={ styles.textBold }> {totalPrice} </Text>
                      </View>

                </View>

                    
              )}
          />
            <Pressable
               
                style={ styles.button }>
                <Text style={styles.textCart}> Check Out </Text>
            </Pressable>
     </>
  );
}

const styles = StyleSheet.create({
    totalContainer: {
        margin: 20,
        padding: 10,
        borderColor: 'gainsboro',
        borderTopWidth: 1
    },
    row: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginVertical: 2

    },
    text: {
        fontSize: 16,
        color: 'grey'
    },
    text: {
        fontSize: 16,
        fontWeight: '500'
    },
    button: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 60,
        width: '70%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 100,
        alignItems: 'center'
    },
    textCart: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16
    }
})