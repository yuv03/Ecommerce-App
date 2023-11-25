import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Searchbar } from 'react-native-paper';
import Spinner from 'react-native-loading-spinner-overlay';
import { useDispatch } from 'react-redux';
import { addToCart, addToFav, removeFromFav } from '../redux/cartReducer';
import {useSelector } from 'react-redux';
import {LeftColumn , RightColumn} from '../components/HomeItem';

const Home = ({ navigation }) => {

  const [product, setProduct] = useState([]);
  const [cartCount, setCartCount] = useState(2);
  const [searchQuery, setSearchQuery] = useState('');
  const [visible, setVisible] = useState(false)
  const [touch, setTouch] = useState(false)

  const favArr = useSelector(state =>state.cart.fav )

  // // let touch = false;
  // const handleTouch = (itemData)=> {
  //   let tempFavItems = favArr.filter(temp => temp.id === itemData.id); 
  //   console.log('tempFavItems',tempFavItems)
  //   if(tempFavItems.length){
  //     console.log("if statement")
  //     handleRemoveFromFav(itemData);
      
  //   } 
  //   else{
  //     console.log("else statement")
  //     handleAddToFav(itemData);
      
  //   }
  //   // touch ? handleRemoveFromFav(itemData) : handleAddToFav(itemData);
  //   // setTouch(!touch)
  // }

  const itemData = async () => {
    
    setVisible(true)
    try {
      const {data} = await axios.get('https://dummyjson.com/products');
      setProduct(data.products);
      setVisible(false)
      
    } catch (error) {
      console.error('Error fetching product data:', error);
      setVisible(false)
    }
  }

  useEffect(()=>{itemData()}, []);

  const fetchData = async (itemId) => {
    setVisible(true)
    try {
      const {data} = await axios.get(`https://dummyjson.com/products/${itemId}`);
      // console.log(data);
      setVisible(false)
      navigation.navigate('Product', {
        productData: data,
      })
    } catch (error) {
      console.error('Error fetching product data:', error);
      setVisible(false)
    }
  };



  const addItem = () => {
    setCartCount((prevCount) => prevCount + 1);
  };


  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {dispatch(addToCart(product))}


  const cartProducts = useSelector(state => state.cart.items)

  // const handleAddToFav = (product) => {dispatch(addToFav(product))}
  // const handleRemoveFromFav = (product) => {dispatch(removeFromFav(product))}

  return (
    <View>
      <View style={{ width: '100%', height: 250, backgroundColor: '#2A4BA0', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Hey, Rahul</Text>
          
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <View style={styles.cartContainer}>
              <Icon name="shopping-bag" size={24} color="white" />
              { cartProducts.length> 0 ? <Text style={styles.cartCount}>{cartProducts.length}</Text>: 
              null}
            </View>
          </TouchableOpacity>
        </View>
        
        <Searchbar
          placeholder="Search Products or store"
          placeholderTextColor={"#8891A5"}
          inputStyle={{color:'white'}}
          onChangeText={handleSearch}
          value={searchQuery}
          style={styles.searchBar}
        />

        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <View style={{marginLeft:10}}>
            <Text style={{color:'#F8F9FB', opacity:0.5}}>Delivery to</Text>
            <Text style={{color:'#F8F9FB'}}>Green Way 3000, Sylhet ˅</Text>
          </View>
          <View style={{marginRight:10}}>
            <Text style={{color:'#F8F9FB', opacity:0.5}}>
              Within
            </Text>
            <Text style={{color:'#F8F9FB'}}>1 Hour ˅</Text>
          </View>
        </View>


      </View>

      

      <Spinner visible={visible} />
      <View style={{height:420}}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
            {product.map((item, index) => (
          index % 2 === 0 && (
            <View key={item.id} style={styles.rowContainer}>
              <TouchableOpacity
                style={styles.columnContainer}
                onPress={() => fetchData(item.id)}
              >
                <LeftColumn item={item}/>
              </TouchableOpacity>

               
               {product[index + 1] && (
                <TouchableOpacity
                  style={styles.columnContainer}
                  onPress={() => fetchData(product[index + 1].id)}
                >
                  <RightColumn product={product[index+1]} />
                </TouchableOpacity>
              )}
            </View>
          )
        ))}
      </ScrollView>


      </View> 
    </View>
  );
};


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


export default Home;



