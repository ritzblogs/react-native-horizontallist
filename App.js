import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, TouchableHighlight, FlatList, ListItem, TextInput, SafeAreaView, StatusBar, ScrollView, View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-elements';



function App() {

  const [avatarurl, setSelectedIm] = useState(null)

  const slides = [
    {

      uri: 'https://i.ibb.co/dLqBk4W/boy1.png',
      backgroundColor: '#20d2bb',
    },
    {

      uri: 'https://i.ibb.co/12RNfL1/girl.png',
      backgroundColor: '#febe29',
    },
    {

      uri: 'https://i.ibb.co/myCXSqx/by2.png',

      backgroundColor: '#22bcb5',
    },
    {

      uri: 'https://i.ibb.co/kQSS6fh/grl2.png',

      backgroundColor: '#3395ff',
    },
    {

      uri: 'https://i.ibb.co/ncJgPw3/by3.png',

      backgroundColor: '#f6437b',
    },
    {


      uri: 'https://i.ibb.co/QjRSV7t/grl3.png',

      backgroundColor: '#febe29',
    },
  ];
  global.slides = slides;

  updateSelData = () => {


    if (avatarurl != null) {
      alert('Image Selected')

    }else{
      alert('Please select a image')
    }

  }

  return (

    <ImageBackground
      source={require('./image/bg_signup.jpg')}

      style={styles.container}>

      <Text style={{ alignSelf: "center", color: "white", fontSize: 25 }}>Horizontal Images</Text>

      <StatusBar
        backgroundColor="#041E2F"
      />
      <SafeAreaView
        style={styles.container}
        contentContainerStyle={{ flex: 1, justifyContent: "center" }} >

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{ flex: 1, justifyContent: "flex-start" }}>
          <View style={styles.containerInput}>

            <View>
              <Card
                containerStyle={{
                  backgroundColor: "translucent",
                  padding: 10,
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: 0,
                }}>
                <View
                  style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                  <Text style={{ color: '#228B22' }}
                  >
                    Choose profile image
            </Text>
                </View>
                <View style={{ marginTop: 10, flexDirection: 'row', width: '100%' }}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {

                      global.slides.map((item, key) => (

                        <View style={{ margin: 5 }} key={key}>
                          <TouchableHighlight onPress={() => { setSelectedIm(item.uri) }}
                          >
                            <Image
                              source={{
                                uri: item.uri,
                              }}
                              style={{ width: 70, height: 70, margin: 10 }}

                            />
                          </TouchableHighlight>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            }}>

                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            }}>

                          </View>
                        </View>
                      ))}
                  </ScrollView>
                </View>
              </Card>
            </View>

            <TouchableOpacity style={styles.loginBtn}>
              <Text onPress={updateSelData} style={styles.textStyle}>Submit</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>

  );
}


export default App;


const styles = StyleSheet.create({
  containerInput: {
    justifyContent: 'center',
    width: "100%",

    alignContent: 'center',
    alignItems: "center",
    alignSelf: 'center',


  }, container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: "10%",
  },


  viewStyle: {

    width: "90%", flexDirection: 'row',
    height: 40, borderColor: 'white', borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,.9)',
    paddingLeft: 10, margin: 10,
  },
  loginBtn: {
    width: "90%",
    backgroundColor: "#EAB15A",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10
  },

  textStyle: {
    color: "white",
    fontSize: 16,
    width: "80%",
    height: 40,
    padding: 10,
    textAlign: "center",
  },


  backgroundImage: {
    width: "100%",
    flex: 1,
    resizeMode: "stretch",
    flexDirection: "column",
    justifyContent: "center"
  },

});






