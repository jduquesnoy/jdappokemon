import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

import AccordionItem from './accordion_item';


class AccordionList extends Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      pokemons:[],
      images:{
        Bulbizarre:require('../assets/#001.png'),
        Herbizarre:require('../assets/#002.png'),
        Florizarre:require('../assets/#003.png'),
        Salamèche:require('../assets/#004.png'),
        Reptincel:require('../assets/#005.png'),
        Dracaufeu:require('../assets/#006.png'),
        Carapuce:require('../assets/#007.png'),
        Carabaffe:require('../assets/#008.png'),
        Tortank:require('../assets/#009.png'),
        Chenipan:require('../assets/#010.png'),
        Chrysacier:require('../assets/#011.png'),
        Papilusion:require('../assets/#012.png'),
        Aspicot:require('../assets/#013.png'),
        Coconfort:require('../assets/#014.png'),
        Dardargnan:require('../assets/#015.png'),
        Roucool:require('../assets/#016.png'),
        Roucoups:require('../assets/#017.png'),
        Roucarnage:require('../assets/#018.png'),
        Rattata:require('../assets/#019.png'),
        Rattatac:require('../assets/#020.png'),
        Piafabec:require('../assets/#021.png'),
        Rapasdepic:require('../assets/#022.png'),
        Abo:require('../assets/#023.png'),
        Arbok:require('../assets/#024.png'),
        Pikachu:require('../assets/#025.png'),
        Raichu:require('../assets/#026.png')
      }
    }
  }
  componentDidMount() {
    fetch("https://my-pokemon-api-jd.herokuapp.com/api/pokemon")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            pokemons: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render(){
    const { error, isLoaded, pokemons } = this.state;
    if (error) {
      return <Text style={styles.text}> Error: {error.message}</Text>;
    } else if (!isLoaded) {
      return <Text style={styles.text}>Loading...</Text>;
    } else {
      return(
        <View style={styles.container}>
          {pokemons.map((pokemon)=>{
            return <AccordionItem pokemon={pokemon} image={this.state.images[pokemon.french_name]} key={pokemon.id}/>
          })}
        </View>
      );
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    margin: 'auto',
  },
  text: {
    textAlign:'center',
    color:'#0f380f',
    marginRight: 8,
    paddingRightMin: 20
  }
});


export default AccordionList;