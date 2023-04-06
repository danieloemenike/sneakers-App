import { Image, ScrollView, StyleSheet, Text, View, useWindowDimensions ,FlatList, Pressable} from "react-native";
import products from "../data/products";
import { useSelector,useDispatch } from "react-redux";
import { addCartItems } from "../features/cartSlice";



const ProductDetailsScreen = () => {
  const product = useSelector(state => state.products.selectedProduct)
    const { width } = useWindowDimensions();
    const dispatch = useDispatch()
    const addToCart = () => {
        dispatch(addCartItems({product}))
    }
    return (
     
        <View>
             <ScrollView>
          {/* Image Carousel */ }
          <FlatList data={ product.images } renderItem={ ({ item }) => (
              <Image source={ { uri: item } } style={ { width: width, aspectRatio: 1 } }  />
          ) }
              horizontal
              showsHorizontalScrollIndicator={ true }
              pagingEnabled
          />
          
         <View style = {{padding:20}}>
          {/* Title */ }
          <Text style={styles.title}> {product.name} </Text>
          <Text style={styles.price}> N{product.price} </Text>
          <Text style={styles.description}> {product.description} </Text>
          </View>
      {/* Price */}

      {/* Description */}

      {/* Add to cart button */}

                {/* Navigation icon */ }
            </ScrollView>
            <Pressable
                onPress = {addToCart}
                style={ styles.button }>
                <Text style={styles.textCart}> Add To Cart </Text>
            </Pressable>
      </View>
      
  );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: "500",
        marginVertical: 10,
    
      },
      price: {
        fontWeight: "500",
          fontSize: 16,
        letterSpacing:1.65
      },
      description: {
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: "300",
    },
    button: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
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
});

export default ProductDetailsScreen;