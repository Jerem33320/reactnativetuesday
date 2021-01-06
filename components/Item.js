import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  image: {
    width: 200,
    height: 200
  }
});

function Item({ route, navigation }) {
  const { itemId, title, price, img } = route.params;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{ uri: img }}
      />
      <Text>Item: {title}</Text>
      <Text>Prix: {price}€</Text>
    </View>
  )
}

export default Item
