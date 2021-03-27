//,,,,,,,,,,13 Entendendo  State,,,,,,,,,,,,,,,

//const { Switch } = require("react-native");

// import React,{Component} from 'react';
// import { View,Text,Image,Button } from 'react-native';

// export default class App extends Component
// {
//   constructor(props)
//   {
//     super(props);
//     this.state = {
//       nome: ''
//     };
//     this.entrar = this.entrar.bind(this);
//   }
//   entrar(nome){
//     this.setState({
//       nome: nome
//     })
//   }

//   render()
//   {
//     return (
//       <View style={{ marginTop: 20 }}>

//         <Button title='entrar' onPress={ ()=> this.entrar('Deus')} />

//         <Text style={{ fontSize:30,color:'red',
//           textAlign: 'center'}}>
//           {this.state.nome}
//         </Text>
//       </View>
//     );
//   }

// };


//,,,,,,,,,,,,14 Aplicando Grupo de Stilos,,,,,,,,,,,,,,,



// import React,{Component} from 'react';
// import { View,Text,StyleSheet } from 'react-native';

// export default class App extends Component
// {


//   render()
//   {
//     return (
//       <View style={styles.area}>

//         <Text style={[styles.t1,styles.t2]}>Dil 1</Text>
//         <Text style={styles.t2}>Dil 2</Text>
//         <Text>Dil 3</Text>
//         <Text style={styles.t1}>Dil 4</Text>

//       </View>
//     );
//   }

// }
// const styles = StyleSheet.create({
//   area: {
//     marginTop: 40
//   },
//   t1: {
//     fontSize: 25,
//     color: '#ff0000'
//   },
//   t2: {
//    textAlign: 'center' 
//   }
// });



//,,,,,,,,,,,,,15 Tamanhos Dinamicos e Fixos


// import React, { Component } from 'react';
// import { View, Text,StyleSheet } from 'react-native';

// export default class App extends Component
// {
//   render()
//   {
//     return (
//       <View style={{flex:1, backgroundColor: '#99dd99'}}>
//         <View style={{ height: 50, backgroundColor: '#444' }}></View>
//         <View style={{ flex: 1, backgroundColor: 'green' }}><Text style={alig}>Deus é Mais</Text></View>
//         <View style={{ height: 50, backgroundColor: '#444' }}></View>



//       </View>
//     );
//   }A
// };




//,,,,,,,,,,,16 Flexbox e Aliamentos,,,,,,,,,,,,,,,,,



// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default class App extends Component 
// {
//   render()
//   {
//     return (
//       <View style={{ flex: 1,flexDirection: 'row',justifyContent: 'center' }}>
//         <View style={{ width: 50, height: 50, backgroundColor: 'green' }}></View>
//         <View style={{ width: 50, height: 50, backgroundColor: 'red' }}></View>
//         <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }}></View>
//       </View>
//     );
//   }
//}



//,,,,,,,,,,,,,,,17 Recebendo Dados,,,,,,,,,,,,,,,,,,,,



// import React, { Component } from 'react';
// import { Text, View, StyleSheet,TextInput,KeyboardAvoidingView } from 'react-native';

// export default class App extends Component
// {
//   constructor(props)
//   {
//     super(props);
//     this.state = {
//       nome: ''
//     };
//     this.peganome = this.peganome.bind(this);
//   }
//   peganome(texto)
//   {
//     if (texto.length > 0)
//     {
//       this.setState({ nome: 'Bem vindo:' + texto });
//     }
//     else{ this.setState({nome:''})
//       this.setState({ nome: texto });
//     }
//   }
//   render()
//   {
//     return (
//       <View style={styles.cont}>
//         <TextInput
//           style={styles.input}
//           placeholder='Digite a senha!'
//           underlineColorAndroid='trasparent'
//           onChangeText={this.peganome}
//         />
//         <Text style={styles.t1}>  {this.state.nome }</Text>

//       </View>
//     )
//    };
// }


// const styles=StyleSheet.create({
//   cont: {
//      flex:1,
//   },
//   input: {
//     height: 45,
//     borderWidth: 1,
//     borderColor: '#222',
//     margin: 10,
//     fontSize: 20,
//     padding: 10,
//   },
//   t1: {
//     textAlign: 'center',
//     fontSize: 20
//   }
// });




// :,,,,,,,,,,,,,,,,19   Trabalndo com botoes,,,,,,,,,,,,,,,,,,,,,,



// import React, { Component } from 'react';
// import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

// export default class App extends Component
// {
//   constructor(props)
//   {
//     super(props);
//     this.state = {
//       nome: '',
//       input:''
//     };

//     this.entrar = this.entrar.bind(this);
//   }
//   entrar()
//   {
//     if (this.state.input === ''){
//       alert('Digite a senha');
//       return;
//   }
//     this.setState({ nome: 'Deus' + this.state.input });

//   }

//   render()
//   {
//     return (
//       <View style={styles.cont}>
//         <TextInput
//           style={StyleSheet.input}
//           placeholder='Digite a senha'
//           underlineColorAndroid='transparent'
//           onChangeText={(texto)=>this.setState({input:texto})}
//         />

//         <Button title='confirmar'onPress={this.entrar}/>

//         <Text style={styles.t1}>{this.state.nome}</Text>

//       </View>
//     )
//   };
// }
// const styles = StyleSheet.create({
//   cont: {
//     flex: 1,
//   },
//   input:{
//     height: 45,
//     borderWidth: 1,
//     borderColor: '#222',
//     margin: 10,
//     fontSize: 20 ,
//     padding: 10,
//   },
//   t1: {
//     textAlign: 'center',
//     fontSize: 29
//   }      

// });




// ,,,,,,,,,,,,,,,,,,,20/ App Biscoito da ,,,,,,,,,,,,,,,,,,,,




// import React, { Component } from 'react';
// import { View, Text, StyleSheet,Image} from 'react-native';

// export default class App extends Component
// {
//   render()
//   {
//     return (
//       <View style={styles.cont}>
//         <Image
//           source={require('./srcbiscoito.png')}
//           style={styles.img}
//         />
//         <Text>"Dil"</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   cont: {
//     flex: 1,
//   },
//   img: {
//     width: 250,
//     height:250
//   }

// });







// import React, { Component } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image
//   } from 'react-native';

// class App extends Component{

//   constructor(props){
//     super(props);
//     this.state = {
//       textoFrase: '',
//       img: require('./src/biscoito.png'),
//     };

//     this.quebraBiscoito = this.quebraBiscoito.bind(this);

//     this.frases = [
//       'Siga os bons e aprenda com eles.', 
//       'O bom-senso vale mais do que muito conhecimento.', 
//       'O riso é a menor distância entre duas pessoas.', 
//       'Deixe de lado as preocupações e seja feliz.',
//       'Realize o óbvio, pense no improvável e conquiste o impossível.',
//       'Acredite em milagres, mas não dependa deles.',
//       'A maior barreira para o sucesso é o medo do fracasso.'
//     ];

//   }

//   quebraBiscoito(){
//     let numeroAleatorio = Math.floor(Math.random() * this.frases.length );

//     this.setState({
//       textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
//       img: require('./src/biscoitoAberto.png')
//     });

//   }


//   render(){
//     return(
//       <View style={styles.container} > 

//       <Image
//         source={this.state.img}
//         style={styles.img}
//       />

//       <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

//       <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
//         <View style={styles.btnArea}>
//           <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
//         </View>
//       </TouchableOpacity>  

//       </View>    
//     );
//   }

// }

// const styles = StyleSheet.create({
//   container:{    
//     flex:1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   img:{
//     width: 250,
//     height: 250,
//   },
//   textoFrase:{
//     fontSize: 20,
//     color: '#dd7b22',
//     margin: 30,
//     fontStyle: 'italic',
//     textAlign: 'center'
//   },
//   botao:{
//     width: 230,
//     height: 50,
//     borderWidth: 2,
//     borderColor: '#dd7b22',
//     borderRadius: 25 
//   },
//   btnArea:{
//     flex:1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   btnTexto:{
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#dd7b22'
//   }
// });

// export default App;



// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,Slider,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,




// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// import Slider from '@react-native-community/slider'




// export default class App extends Component    
// {

//   constructor(props)
//   {
//       super(props);
//     this.state = {

//       velocidade: 0,
//       volume: 0,
//       temperatura: 0


//       };
//   }


//   render()
//   {
//     return (

//       <View>
//          <View >

//               <Text style={{ textAlign: 'center', fontSize: 30 }}>
//          Velocidade:..... {this.state.velocidade.toFixed(1)}

//         </Text>
//         <Slider
//           minimumValue={0}
//           maximumValue={350}
//           onValueChange={(valorSelecionado) => this.setState({velocidade: valorSelecionado })}
//           value={this.state.velocidade}
//           minimumTracrTintColor='#00ff00'
//           maximumTracrTintColor='#ff00ff'
//           />
//         </View>


//           <View >
//         <Text style={{ textAlign: 'center', fontSize: 30 }}>
//           Volume:............{this.state.volume.toFixed(0)}

//         </Text>

//         <Slider
//           minimumValue={0}
//           maximumValue={100}
//           onValueChange={(valorSelecionado) => this.setState({ volume: valorSelecionado })}
//           value={this.state.volume}
//           minimumTracrTintColor='red'
//           maximumTracrTintColor='#ff00ff'
//           />

//          </View>
//         <View>
//         <Text style={{ textAlign: 'center', fontSize: 30 }}>
//             Temperatura:............{this.state.temperatura.toFixed(0)}
//         </Text>
//         <Slider
//           minimumValue={0}
//           maximumValue={100}
//           onValueChange={(valorSelecionado) => this.setState({ temperatura: valorSelecionado })}
//           value={this.state.temperatura}
//           minimumTracrTintColor='#00ff00'
//           maximumTracrTintColor='#ff00ff'
//           />
//           </View>

//         <Text>{ this.state.velocidade > 50 ? 'Muito rápido' : 'Normal'}</Text>


//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   cont:{
//     flex: 1,
//     marginTop: 15
//   },
// });




// ,,,,,,,,,,,,,,,,,,,,,,,,,,,27/   Switch,,,,,,,,,,,,,,,,,,,,,,,




// import React, { Component } from 'react';
// import { View,Text, StyleSheet } from 'react-native';
// export default class App extends Component
// {
//   constructor(props)
//   {
//     super(props);
//     this.state = {
//       status:false
//     };
//   }
//   render()
//   {
//     return (
//       <View style={styles.cont}>
//         <Switch
//             value={this.state.status}
//             onValueChange={(valorSwitch) => this.setState({ status: valorSwitch })}
//             minimumTracrTintColor='#00ff00'
//             maximumTracrTintColor='#ff00ff'
//           thumbColor='red'
//         />
//          <Text style={{textAlign:'center',fontSize:40}}>
//           {(this.state.status)?'On':'Off'}
//         </Text>
//         <Switch
//           value={this.state.status}
//           onValueChange={(valorSwitch) => this.setState({ status: valorSwitch })}
//           minimumTracrTintColor='#00ff00'
//           maximumTracrTintColor='#ff00ff'
//           thumbColor='red'
//         />
//         <Text style={{textAlign:'center',fontSize:40}}>
//           {(this.state.status)?'On':'Off'}
//         </Text>
//       </View>
//     );
//   }


// }
// const styles = StyleSheet.create({
//   cont: {
//     marginTop: 30
//   }
// });




// ;;;;;;;;;;;;;;;;;; Stack Mobile;;;;;;;;;;;;;;;;;;;


// import React, { Component } from 'react'
// import { View, Text} from 'react-native'

// import { NavigationContainer } from "@react-navigation/native"
// import { createStackNavigator } from "@react-navigation/stack"
// import Home from './scr/Pages/Homo'
// import Sobre from './scr/Pages/Sobre'


// const Steck = createStackNavigator()

// export default class App extends Component
// {
//   render()
//   {
//     return (
//       <NavigationContainer>
//         <Steck.Navigator>
//           <Steck.Screen nome='Home' component={Home}/>
//           <Steck.Screen nome='Sobre'component={Sobre}/>
//         </Steck.Navigator>
//    </NavigationContainer>
//     )
//   }
// };
// ;;;;;;;;;;;;;;;;;;;;;;; Incompleto;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;



// ;;;;;;;;;;;;;;;;;;CFB Cursos Navigation;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// import React, { Component } from 'react';
// import React from 'react';
// import Resct, { StyleSheet, Text, Button, View } from 'react-native';
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// const Pilha = createStackNavigator();

// function TelaHome({ navigation })
// {
//   return (
//     <View Style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Tela Home</Text>
//       <Text>CFB Cursos</Text>
//       <Button
//         title='Tela Canal'
//         onPress={()=>navigation.navigate('Canal')}
//       />

//     </View>
//   );
// }
// function TelaCanal({ navigation })
// {
//   return (
//     <View Style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Tela Canal</Text>
//       <Text>youtube.com/cfbcursos</Text>
//     </View>
//   );
// }


//  export default function App1() {
//   return (
//     <NavigationContainer>
//       <Pilha.Navigator initialRouteName='TelaHome'>
//         <Pilha.Screen
//           name='Home'
//           component={TelaHome}
//           options={{ title: 'Tela Inicial' }}
//         />
//          <Pilha.Screen
//           name='Canal'
//           component={TelaCanal}
//           options={{ title: 'Tela Canal' }}
//         />
//       </Pilha.Navigator>

//       </NavigationContainer>
//    );
// };



//;;;;;;;;;;;;;;;;;;; Navegasão entre Telas;;;;;;;;;;;;;;;


// 


// export default function App(){
//   return(
//     <NavigationContainer>
//       <Tab.Navigator
//       screenOptions={ ({route}) => ({
//         tabBarIcon: ({ color, size}) => {
//           const { name } = icons[route.name];
//           return <Icon name={name} color={color} size={size} />
//         } 
//       }) }
//       tabBarOptions={{
//         style:{
//           backgroundColor: '#121212'
//         },
//         activeTintColor: '#FFF',
//       }}
//       >
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Sobre" component={Sobre} />
//         <Tab.Screen name="Contato" component={Contato} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

import React from 'react';
import { View, Text } from 'react-native';

export default function (props)
{
  return (
    <View>
      <View>
        <Text>Ola mundo</Text>
      </View>
    </View>
  );
}