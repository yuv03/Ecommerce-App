import React, { useState } from 'react';
import {useSelector } from 'react-redux';
import CartItems from '../components/CartItems';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Cart = () => {

  const cartProducts = useSelector(state => state.cart.items)
  const totalPrice = useSelector(state =>state.cart.price )




  // console.log('items in cart page', cartProducts)
  return (
    <View>
    <ScrollView style={{height:400}}>

      {cartProducts.length>0 ? cartProducts.map((item, index) => {
        return <CartItems key={index} data={item}/>
      }) : null
      }
    </ScrollView>
    <View style={styles.amount}>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <Text style={{margin:10}}>Subtotal</Text>
      <Text style={{margin:10}}>{totalPrice}</Text>
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <Text style={{margin:10}}>Delivery</Text>
      <Text style={{margin:10}}>$2.00</Text>
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <Text style={{margin:10}}>Total</Text>
      {totalPrice ? <Text style={{margin:10}}>${totalPrice+2}</Text> : <Text style={{margin:10}}>0</Text>}
      {/* <Text style={{margin:10}}>${totalPrice+2}</Text> */}
    </View>



    <TouchableOpacity style={styles.checkoutBtn}>
      <Text style={{alignSelf:'center', marginTop:10, color:'white'}}>Proceed To checkout</Text>
    </TouchableOpacity>

    </View>
    </View>
  )
  
}

const styles = StyleSheet.create({

  productSection:{
    height:80,
    width:350,
    backgroundColor:'#a6a6a6',
    alignSelf:'center',
    borderRadius:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'space-between'
  },
  amount:{
    height:220,
    width:350,
    alignSelf:'center',
    backgroundColor:'#F8F9FB',
    marginTop:30,
    borderRadius:10
  },
  text: {
    fontSize: 24,
    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent:'center',
    alignItems:'center',
    width: '60%',
    margin:10
  },
  checkoutBtn:{
    width:280,
    height:40,
    backgroundColor:'#2A4BA0',
    alignSelf:'center',
    borderRadius:15,
    marginTop:60
  }
})

export default Cart

