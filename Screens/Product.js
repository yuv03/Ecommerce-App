import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import StarRating from 'react-native-star-rating-widget';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { addToCart } from '../redux/cartReducer';
import { useDispatch } from 'react-redux';




const Product = ({ navigation, route }) => {
  const [data, setData] = useState(route.params.productData);
  const [touch, setTouch] = useState(false)
   
  const renderItem = ({ item }) => (
    <Image source={{ uri: item }} style={styles.image} resizeMode="cover" />
  );

  const handleTouch = ()=> {
    setTouch(!touch)
  }



  const rating = data.rating

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {dispatch(addToCart(product))}

  return (
    <View>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
    <MaterialIcons name={'keyboard-backspace'} size={30} color={'black'} />
    </TouchableOpacity>
    <ScrollView showsVerticalScrollIndicator={false}>
    
    <View style={styles.titleContainer}>
      <Text style={styles.titleText} >{data.title}</Text>
      <View style={styles.ratingStyle}>
        <StarRating rating={rating} starSize={20} /> 
        <Text style={styles.ratingTextStyle}>110 Reviews</Text>
        
      </View>
      
    </View>
    <View style={styles.container}>
        <View style={{ marginLeft:300, zIndex:8, marginBottom:-30}}>
      <TouchableOpacity onPress={handleTouch}>
          {touch ?<MaterialIcons name={'favorite'} size={25} color={'red'} />
          :<MaterialIcons name={'favorite-border'} size={25} color={'red'} />}
      </TouchableOpacity>
        </View>

      <View>
        <Carousel
          data={data.images}
          renderItem={renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width}
          loop
        />
      </View>
    </View>
    <View style={styles.priceContainer}>
      <Text style={{color:'#2A4BA0', fontWeight:'bold', fontSize:18}}>{`$${data.price}`}</Text>
      <View style={styles.discountContainer}>
        <Text style={{color:'white', fontSize:10, padding:2, textAlign:'center'}} >{`${data.discountPercentage}% off`}</Text>
      </View>
    </View>

    <View style={styles.cartButton}>
      <TouchableOpacity onPress={()=>handleAddToCart(data)} style={styles.addCartBtn}>
        <Text style={{color:'#2A4BA0'}}>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('Cart')}} style={styles.buyNowBtn}>
        <Text style={{color:'white'}} >Buy Now</Text>
      </TouchableOpacity>

    </View>

    <View style={{padding:8}}>
      <Text style={{marginVertical:8, fontSize:18}}>Details</Text>
      <Text style={{color:'#8891A5'}}>{data.description}</Text>
    </View>


    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    height: 200,
    justifyContent:'center',
    alignItems:'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  titleContainer:{
    width:300,
    height:125,
    top:70,
    left:20
  },
  titleText:{
    fontWeight: 'bold',
    fontSize:50,
    color:'#1E222B'

  },
  ratingStyle:{
    width: 181.65,
    height: 20,
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingTextStyle:{
    marginLeft: 5,
    color: '#A1A1AB'
  },
  priceContainer:{
    flexDirection: 'row',
    alignItems:'center',
    left:10,
    marginTop:5
    

  },
  discountContainer:{
    marginLeft: 10,
    backgroundColor:'#2A4BA0',
    borderRadius:6,
    width:60,
    height: 20
    

  },
  cartButton:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems: 'center',
    marginTop:20
  },
  addCartBtn:{
    width: '40%',
    height: 56,
    borderRadius: 20,
    border: 1,
    borderWidth:1,
    borderColor: '#2A4BA0',
    color:'#2A4BA0',
    justifyContent:'center',
    alignItems:'center',

  },
  buyNowBtn:{
    width: '40%',
    height: 56,
    borderRadius: 20,
    border: 1,
    borderWidth:1,
    borderColor: '#2A4BA0',
    color:'#2A4BA0',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#2A4BA0'
  }

});



export default Product;

