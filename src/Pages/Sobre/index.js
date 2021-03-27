// import React, { Component } from 'react'
// import { Text, View, StyleSheet } from 'react-native'


// export default class Sobre extends Component
// {
// 	render()
// 	{
// 		return (
// 			<View style={styles.contai}>
// 				<Text style={styles.title}>Tela principal</Text>
// 			</View>
// 		)
// 	}
// }

// const styles = StyleSheet.create({
// 	contai: {
// 		flex: 1,
// 		backgroundColor: 'blue',
// 		justifyContent: 'center',
// 		alignItems: 'center'
// 	},
// 	title: {
// 		fontSize: 30,
// 		color: '#FFF',
// 		fontWeight: 'bold'

// 	}
// });


// import React from 'react';
// import { View, Text,Button } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// export default function Sobre({route})
// {
// 	const navigation = useNavigation();
// 	navigation.setOptions({
// 	title:`Sobre ${route.params?.nome}`
// })
// 	return (
// 		<View>
// 			<Text>Sobre</Text>
// 			<Text>{route.params?.nome}</Text>

// 			<Button
// 				title='Voltar para Home'
// 				onPress={() => navigation.goBack()}
// 			/>
// 			<Button
// 				title='Contato'
// 				onPress={() => navigation.navigate('Contato')}
// 			/>
// 		</View>
// 	);
// }


// import React from 'react';
// import { Text, View } from 'react-native';

// export default function Cozinha() {
//  return (
// 	 <View>
// 		 <Text>Cozinha</Text>
//      </View>
//   );
// }