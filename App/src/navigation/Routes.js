import { LoginScreen } from './../screens/LoginScreen';
import { RegisterScreen } from './../screens/RegisterScreen';
import { HomeScreen } from './../screens/HomeScreen';
import { ThankyouScreen } from './../screens/ThankyouScreen';
import { ListProductScreen } from './../screens/ListProductScreen';
import { ListTypeOfProductScreen } from './../screens/ListTypeOfProductScreen';
import { SingleProductScreen } from './../screens/SingleProductScreen';
import { CartScreen } from './../screens/CartScreen';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';

const AppTabNavigator = createBottomTabNavigator({
  Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel:"Home Page",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={30} color="#900" />
        )
      },
    },
  MatHang: ListTypeOfProductScreen,
  User: LoginScreen,
  Cart: CartScreen,
});


const Routes = createStackNavigator({
  Home: {
    screen: HomeScreen,
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

