import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartReducer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/FontAwesome';

export const LeftColumn = ({item}) => {

    const [touch, setTouch] = useState(false)

    const dispatch = useDispatch();
    const handleAddToCart = (product) => {dispatch(addToCart(product))}

    const handleTouch = () => {
        setTouch(!touch)
    }

  return (
                <>              
                <View style={{marginRight:110}}>
                    <TouchableOpacity onPress={handleTouch}>
                        {touch ?<MaterialIcons name={'favorite'} size={25} color={'red'} />
                        :<MaterialIcons name={'favorite-border'} size={25} color={'red'} />}
                    </TouchableOpacity>
                </View>
                
                <Image
                  style={styles.tinyLogo}
                  source={{ uri: item.thumbnail }}
                />
                <View style={{flexDirection:'row', marginTop:30}}>
                    <View style={{marginRight:30, paddingLeft:2}}>
                      <Text style={{color:'#1E222B', fontWeight:'700'}}>${item.price}</Text>
                      <Text style={{ color: '#616A7D', fontWeight: '400' }}>
                        {
                          (() => {
                            let str = item.title;
                            return str.length > 10 ? <Text>{str.slice(0, 10)}...</Text> : <Text>{str}</Text>;
                          })()
                        }
                      </Text>
                    </View>
                    <TouchableOpacity onPress={()=>handleAddToCart(item)} style={{marginRight:5}}>
                      
                      <Icon name="plus-circle" size={30} color="#2A4BA0" />
                    </TouchableOpacity>
                  </View>
                  </>
  )
}


export const RightColumn = ({product}) => {

    const [touch, setTouch] = useState(false)

    const dispatch = useDispatch();
    const handleAddToCart = (productData) => {dispatch(addToCart(productData))}

    const handleTouch = () => {
        setTouch(!touch)
    }

    return(
        <>
        <View style={{marginRight:110}}>
                    <TouchableOpacity onPress={handleTouch}>
                        {touch ?<MaterialIcons name={'favorite'} size={25} color={'red'} />
                        :<MaterialIcons name={'favorite-border'} size={25} color={'red'} />}
                    </TouchableOpacity>
                  </View>
                  
                  <Image
                    style={styles.tinyLogo}
                    source={{ uri: product.thumbnail }}
                  />
                  <View style={{flexDirection:'row', marginTop:30}}>
                    <View style={{marginRight:30, paddingLeft:2}}>
                      <Text style={{color:'#1E222B', fontWeight:'700'}}>${product.price}</Text>
                      <Text style={{ color: '#616A7D', fontWeight: '400' }}>
                        {
                          (() => {
                            let str = product.title;
                            return str.length > 10 ? <Text>{str.slice(0, 10)}...</Text> : <Text>{str}</Text>;
                          })()
                        }
                      </Text>
                    </View>
                    <TouchableOpacity onPress={()=>handleAddToCart(product)} style={{marginRight:5}}>
                      
                      <Icon name="plus-circle" size={30} color="#2A4BA0" />
                    </TouchableOpacity>
                  </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    headerText: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
      marginTop: 52,
      marginLeft: 10
    },
    
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
      backgroundColor:'#F8F9FB',
      alignContent:'space-between'
    },
    columnContainer: {
      flex: 1,
      height:200,
      marginRight:8,
      borderRadius:15,
      borderColor: 'black',
      backgroundColor: '#e6e6e6',
      padding: 8,
      alignItems: 'center',
      marginHorizontal: '1%'
    },
    cartContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 52,
      marginRight: 10
    },
    cartCount: {
      backgroundColor: 'red',
      color: 'white',
      borderRadius: 10,
      marginLeft: 5,
      padding: 2,
      fontSize: 12,
    },
    searchBar: {
      margin: 16,
      backgroundColor: '#153075'
    },
  
    slide: {
      flex: 1,
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:100,
      marginBottom:10,
      backgroundColor:'red',
      height:400,
      width:400
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 10,
    },
    text: {
      marginBottom:10,
      fontSize: 16,
      fontWeight: 'bold',
      color:'black',
      alignItems:'center',
      backgroundColor:'purple'
    },
    tinyLogo: {
      width: 80,
      height: 80,
      borderRadius:5
    },
  });
  
