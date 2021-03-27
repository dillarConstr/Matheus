// import React, { Component } from 'react'
// import { Text, View, StyleSheet } from 'react-native'


// export default class Home extends Component
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
// })


// import React from 'react';
// import { View, Text, Button } from 'react-native';

// import { useNavigation } from '@react-navigation/native';

// export default function Home()
// {
// 	const navigation = useNavigation();

// 	function irSobre(){
// 		navigation.navigate('Sobre',{nome:'Deus e Dil e Deus',});
// 	}
// 	return (
// 		<View>
// 			<Text>Home</Text>
// 			<Text>Bem vindo a tela home !!</Text>
// 			<Text>Deus me Abençoe</Text>
// 			<Button
// 				title='Ir para Sobre'
// 				onPress={irSobre}
// 			/>
// 		</View>
// 	);
// }



// import React, { useState } from 'react';
// import { Text, TouchableOpacity, View, Image, TouchableOpacityBase } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import On from '../../Img/On.png'
// import Off from '../../Img/Off.png'

// export default function Cozinha()
// {
// 	let onOff = false

// 	function OnOff()
// 	{
// 		let valor = !on
// 		setOn(valor)
// 	}

// 	const [on, setOn] = useState(false)

// 	return (
// 		<View>
// 			<Text style={{ color: '#0077b9' }}>Cozinha</Text>
// 			<Icon name='ios-home' color='#000' size={50} />
// 			<TouchableOpacity>
// 				<Image style={{ width: 140, height: 47 }} source={require('../../Img/bt.png')} />
// 				<Text></Text>
// 			</TouchableOpacity>
// 			<TouchableOpacity>
// 				<Image style={{ width: 140, height: 50 }} source={require('../../Img/bt2.png')} />
// 			</TouchableOpacity>
// 			<TouchableOpacity>
// 				<Image style={{ width: 80, height: 80 }} source={require('../../Img/botaoCarrinho.png')} />
// 				<Text>   Comprar</Text>
// 			</TouchableOpacity>
// 			{/* <View style={{ flex: 1, padding: 10, flexDirection: 'row' }}> */}

// 			<View>
// 				<TouchableOpacity onPress={() => { OnOff() }}>
// 					<Image style={{ width: 80, height: 42, marginLeft: 10 }} source={on ? On : Off} />
// 				</TouchableOpacity>
// 			</View>



// 		</View>
// 	);
// }

