import * as React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Ionicons from '@expo/vector-icons/Ionicons'

import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'

function DetailsScreen({navigation}: {navigation: any}) {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Text>Details Screen</Text>
			<Button title='Go back' onPress={() => navigation.goBack()} />
		</View>
	)
}

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
			<Drawer.Navigator initialRouteName='Home'>
				<Drawer.Screen name='Home' component={HomeScreen} 
					options={{
						title: 'Home',
						drawerIcon: ({focused, size}) => (
							<Ionicons
								name='md-home'
								size={size}
								color={focused ? '#7cc' : '#ccc'}
							/>
						)
					}}
				/>
				<Drawer.Screen name='Details' component={DetailsScreen}
					options={{
						title: 'Details',
						drawerIcon: ({focused, size}) => (
							<Ionicons
								name='md-documents'
								size={size}
								color={focused ? '#7cc' : '#ccc'}
							/>
						)
					}}
				/>
				<Drawer.Screen name='About' component={AboutScreen} 
					options={{
						title: 'About',
						drawerIcon: ({focused, size}) => (
							<Ionicons
								name='md-alarm'
								size={size}
								color={focused ? '#7cc' : '#ccc'}
							/>
						)
					}}
				/>
				</Drawer.Navigator>
		</NavigationContainer>
  )
}
