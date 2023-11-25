import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useCallback, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import {useDispatch } from 'react-redux';
import { addSameItemToCart, removeFromCart, removeSameItemFromCart } from '../redux/cartReducer';

const CartItems = ({data}) => {

    const dispatch = useDispatch();
    const handleAddToCart = (product) => {dispatch(addSameItemToCart(product))}
    const handleRemoveFromCart = (product) =>{dispatch(removeFromCart(product))}
    const removeItemFromCart = (product) =>{dispatch(removeSameItemFromCart(product))}

    const [count, setCount] = useState(1);

    const increment = () => {
      setCount(count + 1);
    };
  



    const decrement = useCallback((itemData)=>{
        if(count>1){
            // console.log('count', count)
            removeItemFromCart(itemData);
            setCount(count - 1);
        }
        else{
            // console.log('remove from cart', count)
          handleRemoveFromCart(itemData)

        }
    },[count])

  return (
    <View>
        <View style={styles.productSection}>
        <Image source = {{uri:data.thumbnail}} style={{height:50, width:'10%', margin:10}} />
        <View style={{margin:10, width:'50%'}}>
          <Text style={{color:'#1E222B', fontSize:16}}>{data.title}</Text>
          <Text style={{color:'#1E222B', fontSize:16}}>{data.price}</Text>
        </View>
        <View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity title="Decrement" onPress={()=>{decrement(data)}} >
              <Text style={{fontSize:30, color:'black'}}>-</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{count}</Text>
            <TouchableOpacity title="Increment" onPress={()=>{handleAddToCart(data); increment()}} >
              <Text style={{fontSize:30, color:'black'}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
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
      alignContent:'space-between',
      margin:8
    },
    amount:{
      height:220,
      width:350,
      alignSelf:'center',
      backgroundColor:'#F8F9FB',
      marginTop:350,
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
      width: '40%',
      margin:10,

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

export default CartItems