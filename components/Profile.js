import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    flex: 1,
    top: 40,
    color: 'grey',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  image: {
    flex: 4,
    height: 300,
    width: 300
  },
  info: {
    flex: 1,
    fontSize: 20,
    alignSelf: 'flex-start',
    paddingLeft: 30,
    paddingRight: 30
  }
});
function Annonces() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon Profile</Text>
      <Text style={styles.info}>Nom: Morty - Age: 16ans</Text>
      <Text style={styles.info}>Profession: Voyageur intergalactique et équipier de Rick.</Text>
      <Text style={styles.info}>Aime regarder les filles et décapiter les extra-terrestres.</Text>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{ uri: "https://imgix.ranker.com/user_node_img/50054/1001066706/original/the-mortiest-morty-is-very-special-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces" }}
      />
    </View>
  )
}

export default Annonces
