import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  card: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  container: {
    paddingLeft: 30,
    paddingRight: 30
  },
  image: {
    height: 60,
    width: 60
  },
})

export default class CardAnnonce extends React.Component{

  render(){
    return(
      <View style={
        [
          styles.container,
          { 
            flexDirection: this.props.right % 2 ? "row-reverse" : "row" 
          }
        ]
      }>
          <Card containerStyle={{width: '100%'}} wrapperStyle={styles.card}>
            <View>
              <Image
                style={styles.image}
                resizeMode="contain"
                source={{ uri: this.props.img }}
              />
            </View>
            <View>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Title>{this.props.price} €</Card.Title>
            </View>
          </Card>
      </View>
    )
  }
}