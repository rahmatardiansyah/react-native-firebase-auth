import React from 'react'
import { StyleSheet, Image } from 'react-native'
import OnBoarding from 'react-native-onboarding-swiper'

const OnBoardingScreen = ({ navigation }) => {
  return (
    <OnBoarding
      onSkip={() => navigation.navigate('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../asset/onboarding-img1.png')} />,
          title: 'Connect to the World',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../asset/onboarding-img2.png')} />,
          title: 'Share Your Favorite',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../asset/onboarding-img3.png')} />,
          title: 'Become The Star',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({})
