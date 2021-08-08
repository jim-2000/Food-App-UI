import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import COLORS from '../../const/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SecondaryButton } from '../../const/Button';

const DetailsScreen = ({navigation,route}) => {
    const item = route.params;
    return (
        <SafeAreaView style={{backgroundColor:COLORS.white}}>
          <View style={styles.header}>
            <Icon name="arrow-back-ios"  size={28} 
            color={COLORS.dark}
            onPress={navigation.goBack}/>
            <Text style={{fontSize:20,fontWeight:'bold'}}>DETAILS</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
                <View 
                style={{
                    justifyContent:'center',
                    alignItems:'center',
                    height: 300,
                }}>
                    <Image source={item.image}
                     style={{height:220,width:220}} 
                    />

                </View>
                <View style={styles.details}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{fontSize:25,fontWeight:'bold',color:COLORS.white}}>{item.name}</Text>
                        <View style={styles.iconContainer}>
                        <Icon name="favorite-border"  size={25} 
                        color={COLORS.primary}
                        onPress={navigation.goBack}
                        />
                        </View>
                    </View>              
                    <Text style={styles.detailsText}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
                    </Text>
                    <View style={{marginTop:40,marginBottom:60}}>
                        <SecondaryButton title="Add To Cart" />
                    </View>
                  
                </View>
          </ScrollView>
        </SafeAreaView>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    header:{
        paddingVertical:20,
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:20,
    },
    details:{
        paddingHorizontal:20,
        paddingTop:60,
        paddingBottom:90,
        backgroundColor:COLORS.primary,
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
    },
    iconContainer:{
        backgroundColor:COLORS.white,
        height: 50,
        width: 50,
        justifyContent:'center',alignItems:'center',borderRadius:30
    },
    detailsText:{
        marginTop:10,
        lineHeight:28,
        fontSize:16,
        color: COLORS.white,
    }
})
