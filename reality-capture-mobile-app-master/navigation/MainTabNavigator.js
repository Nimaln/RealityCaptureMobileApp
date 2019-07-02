import React from 'react'
import { Platform, Text, View, ScrollView, StyleSheet, Linking  } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'

import Colors from '../constants/Colors'

import ImageScreen from '../screens/ImageScreen'
import ViewerScreen from '../screens/ViewerScreen'

class InfoScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text style = {styles.header}>Instructions{'\n'}</Text>
        <Text style = {styles.body}>If you are on this screen, you have already downloaded and installed Expo and built the application by scanning the QR code or clicking on the provided link.{'\n'} </Text>
        <Text style = {styles.subHeader}>General:{'\n'}</Text>
        <Text style = {styles.body}>•	Make sure your mobile camera has a minimum resolution of 5 MP.</Text>
        <Text style = {styles.body}>•	If your mobile has the HDR option, activate it.</Text>
        <Text style = {styles.body}>•	Make sure you enter the room/zone assigned to you for this experiment.</Text>
        <Text style = {styles.body}>•	Make sure the room is empty and does not have moving objects/people.</Text>
        <Text style = {styles.body}>•	Make sure the room is evenly lit. </Text>
        <Text style = {styles.body}>•	Keep track of the time for the following activities: </Text>
        <Text style = {styles.body}>-	Total time for capture of images (in minutes)</Text>
        <Text style = {styles.body}>- Total time for upload of images (in minutes){'\n'}</Text>

        <Text style = {styles.subHeader}>Instructions for acquiring the images:{'\n'}</Text>
        <Text style = {styles.body}>•	Please walk along the perimeter of the room.</Text>
        <Text style = {styles.body}>•	Stop every 3-4 steps and capture your images.</Text>
        <Text style = {styles.body}>•	Capture a photo roughly every 20-25 degrees in every location. (Try to manage both the horizontal and vertical angles to get the most cover).</Text>
        <Text style = {styles.body}>•	Make sure your images have a greater than 60% overlap. </Text>
        <Text style = {styles.body}>•	Manage to acquire the widest field of view in every picture.</Text>
        <Text style = {styles.body}>•	Move a few steps and repeat the process until you cover the perimeter of the room.{'\n'}</Text>

        <Text style = {styles.subHeader}>What not to do:{'\n'}</Text>
        <Text style = {styles.body}>•	Try to avoid shaky and blurry images.</Text>
        <Text style = {styles.body}>•	Do not change the focal length between your pictures. Do not zoom in/zoom out. Follow the auto focus option on your mobile camera.</Text>
        <Text style = {styles.body}>•	Do not take too many overlapping images of shiny/reflective/transparent surfaces. A change in gradient and texture is fundamental for the reconstruction algorithm.{'\n'}</Text>
        <Text style = {styles.subHeader}>Participation Survey:{'\n'}</Text>
        <Text style = {styles.body}>Kindly fill this survey once your participation is complete:{'\n'}</Text>
        <Text style = {styles.survey} onPress={ ()=> Linking.openURL('https://forms.gle/67CchBy5GDGgmHdR6')}>Click here to open the survey {'\n'}
</Text>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({

  header: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 26
  },
  subHeader: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 20
  },
  body: {
    fontWeight: 'normal',
    textAlign: 'left',
    fontSize: 18
  },
  survey: {
    fontWeight: 'normal',
    textAlign: 'center',
    color: 'blue',
    fontSize: 18
  }
})


export default createBottomTabNavigator(
  {
    Images: {
      screen: ImageScreen
    },
    ForgeViewer: {
      screen: ViewerScreen
    },
    Info: {
      screen: InfoScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        let iconName
        switch (routeName) {
          case 'Images':
            iconName =
                    Platform.OS === 'ios'
                      ? `ios-camera${focused ? '' : '-outline'}`
                      : 'md-camera'
            break
          case 'ForgeViewer':
            iconName = Platform.OS === 'ios' ? `ios-cloud-done${focused ? '' : '-outline'}` : 'md-cloud-done'
            break
          case 'Info':
          iconName = Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-cloud-done'
            break
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        )
      }
    }),
    tabBarComponent: BottomTabBar,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
  }
)
