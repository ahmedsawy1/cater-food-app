import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import HomeScreen from '../screens/home/HomeScreen';
import ProductOverview from '../screens/product/ProductOverview';
import BuffetOverview from '../screens/product/BuffetOverview';
import CartScreen from '../screens/cart/CartScreen';
import MyOrders from '../screens/cart/MyOrders';
import OrderOverview from '../screens/cart/OrderOverview';

import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import MyAccountScreen from '../screens/auth/MyAccountScreen';
import NotificationScreen from '../screens/auth/NotificationScreen';
import Support from '../screens/more/Support';
import AboutUs from '../screens/more/AboutUs';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductOverview" component={ProductOverview} />
      <Stack.Screen name="BuffetOverview" component={BuffetOverview} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="OrderOverview" component={OrderOverview} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: 'transparent',
        },
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="MainStack" component={MainStack} />
      <Drawer.Screen name="MyOrders" component={MyOrders} />
      <Drawer.Screen name="MyAccountScreen" component={MyAccountScreen} />
      <Drawer.Screen name="NotificationScreen" component={NotificationScreen} />
      <Drawer.Screen name="Support" component={Support} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
    </Drawer.Navigator>
  );
}

// const {isSignedIn} = useSelector(state => state.authReducer);
// {!isSignedIn && (
//   <>
//     {/* <Stack.Screen name="Login" component={Login} />
//   <Stack.Screen name="SignUp" component={SignUp} /> */}
//   </>
// )}
