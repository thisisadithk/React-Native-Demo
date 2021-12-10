import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen'; 
import MultiComps from './src/screens/MultiComps';
import Counter from './src/screens/Counter';
import ColorPicker from './src/screens/ColorPicker';
import SquareScreen from './src/screens/SquareScreen';

const navigator = createStackNavigator(
  {
    Home : HomeScreen,
    Components : ComponentScreen,
    Lists : ListScreen,
    MultipleComponents : MultiComps,
    Counter : Counter,
    ColourPicker : ColorPicker,
    Square : SquareScreen 
  },
  {
    initialRouteName : "Home",
    defaultNavigationOptions : {
      title : "Demo-React-Native"
    }
  }
);

export default createAppContainer(navigator);