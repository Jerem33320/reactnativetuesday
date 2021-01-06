import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
// import { TextInput } from 'react-native-gesture-handler';
import CardAnnonce from './CardAnnonce';
import { Input } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import { Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerBottom: {
    flex: 2,
    flexDirection: "column",
    alignSelf: 'stretch',
  },
  inputAnnonce: {
    marginTop: 130,
    height: 50,
  },
  title: {
    fontSize: 50,
    zIndex: 1,
    position: 'absolute',
    top: 40,
    color: 'grey',
    fontWeight: 'bold',
  },
});

export default class Annonces extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: "",
      cards: [
        {
          title: "Tv",
          price: 50,
          img: "https://www.shareicon.net/data/2015/12/05/194182_tv_256x256.png"
        },
        {
          title: "Voiture",
          price: 5000,
          img: "http://www.pngmart.com/files/4/Car-Transparent-PNG.png"
        },
        {
          title: "PS5",
          price: 500,
          img: "https://www.citypng.com/public/uploads/preview/-11591925787cggjhepdvq.png"
        },
        {
          title: "Aquarium",
          price: 150,
          img: "https://cdn.imgbin.com/1/1/23/imgbin-goldfish-stock-photography-aquarium-fish-uM0fiHbaXn3nFUyaRsxtcuQNq.jpg"
        },
        {
          title: "Guitare électrique",
          price: 430,
          img: "https://www.vippng.com/png/detail/449-4494000_dean-bass-show-namm-guitar-guitars-electric-clipart.png"
        },
        {
          title: "Canapé",
          price: 120,
          img: "http://atlas-content-cdn.pixelsquid.com/stock-images/classical-3-seater-sofa-5A50Bz2-600.jpg"
        },
      ],
      text: '',
    }
  }

  handleText = (value) => {
    this.setState({
      inputValue: value,
    })
  }

  clearText = () => {
    this.setState({
      inputValue: ''
    })
  }

  render(){
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.state.inputValue)}</Text>
        <Text style={styles.title}>Annonces</Text>
        <Input
          style={styles.inputAnnonce}
          placeholder="Trouver une annonce"
          onChangeText={this.handleText}
        />
        <SafeAreaView style={styles.containerBottom}>
          <ScrollView>
              {
                this.state.cards.map((card, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Item', {
                          itemId: index,
                          title: card.title,
                          price: card.price,
                          img: card.img
                        })
                      }
                    >
                      <CardAnnonce
                        key={index}
                        right={index % 2}
                        card={card}
                        title={card.title}
                        price={card.price}
                        img={card.img}
                        navigation={navigation}
                      />
                    </TouchableOpacity>
                  )
                })
              }
            </ScrollView>
          </SafeAreaView>
      </View>
    )
  }
}
