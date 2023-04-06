import { NavigationContainer } from "@react-navigation/native"
import ProductDetailsScreen from "./screens/ProductDetails";
import ShoppingCart from "./screens/ShoppingCart";
import ProductScreen from "./screens/ProductScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"
import { useSelector } from "react-redux";
import { selectedNumberOfItems } from "./features/cartSlice";

const Stack = createNativeStackNavigator()
export default function Navigation() {
  const numberOfItems = useSelector(selectedNumberOfItems)
  return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={ {
        contentStyle: {
          backgroundColor: "white"
        }
          }}>
        <Stack.Screen
          name="Products"
          component={ ProductScreen }
          options={({navigation})=>({
            headerRight: () => (
              <Pressable style={ { flexDirection: 'row' } }
              onPress={() => navigation.navigate('Cart')}
              >
                <FontAwesome5 name="shopping-cart" size={ 18 } color="gray" /> 
                <Text style={{marginLeft: 5, fontWeight: '500'}}> {numberOfItems} </Text> 
              </Pressable>
            ),
          }) } />
        <Stack.Screen
                  name="Product Details"
                  component={ ProductDetailsScreen }
           />
              <Stack.Screen name="Cart" component={ ShoppingCart} />
          
          </Stack.Navigator>
    </NavigationContainer>
          
  );
}
