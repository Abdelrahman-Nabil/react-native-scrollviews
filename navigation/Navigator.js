import React from 'react'
import ListScreen from '../screens/ListScreen'

import {
	createMaterialTopTabNavigator,
	createAppContainer,
} from 'react-navigation'

const VerticalListScreen = (props) => (<ListScreen orientation = 'vertical' />);
const HorizontalListScreen = (props) => (<ListScreen orientation = 'horizontal' />);
const GridListScreen = (props) => (<ListScreen orientation = 'grid' />);


const MainRout = createMaterialTopTabNavigator(
	{
		Vertical: VerticalListScreen,
    Horizontal: HorizontalListScreen,
    Grid: GridListScreen
	},
)

export default MainRouter = createAppContainer(MainRout)
