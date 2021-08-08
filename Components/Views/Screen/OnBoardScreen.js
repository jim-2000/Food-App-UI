import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PrimaryButton } from '../../const/Button'
import COLORS from '../../const/colors'
import categories from '../../const/categories'
const OnBoardScreen = ({navigation}) => {
    const [indexSelected, setIndexSelected] = useState(0)


    return (
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
            <View style={{height:400}}>
            <Image 
                style={{
                    width: '100%',
                    resizeMode:'contain',
                    top: -150,
                }}
                source={require('../../assets/onboardImage.png')}
            />
               
            </View>
            <View style={styles.textContainer}>
                    <View>
                        <Text style={{fontSize:32,
                            fontWeight:'bold',textAlign:'center'}}
                            >Delicious Food</Text>
                        <Text style={{fontSize:18,textAlign:'center',
                        marginTop:20,color:COLORS.grey}}
                        >We help to find best and Delicious Food</Text>
                    </View>
                    <View style={styles.indecatorContainer}>
                        <View style={styles.currentIndicator}></View>
                        <View style={styles.Indicator}></View>
                        <View style={styles.Indicator}></View>
                    </View>
                    <PrimaryButton title="Get Started" onPress={()=>{navigation.navigate('HOME')}} />
            </View>
        </SafeAreaView>
    )
}

export default OnBoardScreen

const styles = StyleSheet.create({
    indecatorContainer:{
        height: 50,
        flex: 1,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center'

    },
    textContainer:{
        flex: 1,
        paddingHorizontal:100, 
        justifyContent:'space-between',
        paddingBottom:40,
    },
    currentIndicator:{
        height: 12,
        width:30,
        borderRadius:10,
        backgroundColor:COLORS.primary,
        marginHorizontal:5,
    },
    Indicator:{
        height: 12,
        width: 12,
        borderRadius:6,
        backgroundColor:COLORS.grey,
        marginHorizontal:5
    },
})
