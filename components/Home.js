import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  btnTxt: {
    color: 'white',
    fontWeight: 'bold'
  },
  button: {
    borderRadius: 20,
    backgroundColor: "grey",
    height: 50,
    width: 260,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTop: {
    position: 'absolute',
    top: 10,
    height: '30%',
    display: 'flex',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 50,
    zIndex: 1,
    top: 40,
    color: 'grey',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  logo: {
    zIndex: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
});

function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{uri:'http://www.thouswell.com/wp-content/uploads/2017/08/summer-home-decor-edit-tables.jpg'}}
      />
      <View style={styles.containerTop}>
        <Text style={styles.title}>Bienvenue</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push('Profile')}
        >
          <Text style={styles.btnTxt}>Mon Compte</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push('Annonces')}
        >
          <Text style={styles.btnTxt}>Voir les annonces</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home
