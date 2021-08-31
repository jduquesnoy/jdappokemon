import React, { Component } from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
// require('../assets/#001.png')
class AccordionItem extends Component {
  constructor(props){
    super(props);
    this.state={
      isActive: false,
      screenHeight: null,
      screenWidth: null
    }

  }

  handlePokemon = () =>{
    this.setState(prevState =>({isActive: !prevState.isActive}));
  }

  handlelayout = (e) =>{
    console.log("Screen Orientation Changed...")
    this.setState({
      screenWidth: Dimensions.get('window').width,
      screenHeight: Dimensions.get('window').height
    })
  }


  render(){

    return (
      <View>
        <Text style={this.state.isActive ? styles.titleContent : styles.title} onPress={this.handlePokemon}>
            {this.props.pokemon.french_name}
        </Text>

        { this.state.isActive &&
        <View>
            <Image
              style={styles.pokemonImage}
              source={this.props.image}
            />
          <View style={this.state.screenHeight > this.state.screenWidth ? styles.ContainerPortrait : styles.ContainerLandscape} onLayout={this.handlelayout}>
              <Text style={styles.content}>N° pokedex: {this.props.pokemon.pokedex_number}</Text>
              <Text style={styles.content}>Nom anglais: {this.props.pokemon.english_name}</Text>
              <Text style={styles.content}>Nom japonais: {this.props.pokemon.japanese_name}</Text>
              <Text style={styles.content}>{this.props.pokemon.description}</Text>
          </View>
        </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pokemonImage: {
    with: 100,
    height: 100,
    resizeMode: 'contain'
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 16,
    marginBottom: 8,
    borderColor:'#0f380f',
    borderWidth: 2,
    textAlign:'center',
    fontSize: 16,
    // fontWeight: 'bold',
    color:'#0f380f',


  },
  titleContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0f380f',
    paddingVertical: 20,
    borderRadius: 16,
    marginBottom: 8,
    borderColor:'#355b26',
    borderWidth: 2,
    color: '#82a70a',
    textAlign:'center',
    fontSize: 16,
    // fontWeight: 'bold',

  },
  content:{
    textAlign:'left',
    color:'#0f380f',
    marginRight: 8,
    paddingRightMin: 20
  }
  ,
  ContainerPortrait: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 16,
  },
  ContainerLandscape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 16,
  },

});

export default AccordionItem;
