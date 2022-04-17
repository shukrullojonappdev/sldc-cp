import * as React from 'react'
import { View, Text } from 'react-native'

export default function AboutScreen({navigation}: {navigation: any}) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>About Screen</Text>
		</View>
	)
}
