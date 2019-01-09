import { LoginScreen } from './../screens/LoginScreen';
import { RegisterScreen } from './../screens/RegisterScreen';
import { HomeScreen } from './../screens/HomeScreen';
import { ThankyouScreen } from './../screens/ThankyouScreen';
import { ListProductScreen } from './../screens/ListProductScreen';
import { ListTypeOfProductScreen } from './../screens/ListTypeOfProductScreen';
import { CartScreen } from './../screens/CartScreen';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";


const AppTabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  MatHang: ListTypeOfProductScreen,
  User: LoginScreen,
  Cart: CartScreen,
});


const Routes = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen
  },
  ListProduct: {
    screen: ListProductScreen
  },
  ListTypeOfProduct: {
    screen: ListTypeOfProductScreen
  },
  Tabs: {
	screen: AppTabNavigator  
  }
}, {
   initialRouteName: "Tabs"
});

export default createAppContainer(Routes);

