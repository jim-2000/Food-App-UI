import React from 'react'
import { TouchableOpacity, View,StyleSheet,Text } from 'react-native'
import COLORS from './colors'

export const PrimaryButton = ({title,onPress=()=>{}})=>{
    return <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
        <View style={styles.btnPrimary}><Text style={{fontSize:18,color:COLORS.white,fontWeight:'bold'}}>{title}</Text></View>
    </TouchableOpacity>
}

export const SecondaryButton = ({title,onPress=()=>{}})=>{
    return(
            <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
                <View style={{...styles.btnPrimary,backgroundColor:COLORS.white}}>
                    <Text 
                    style={{
                        fontSize:18,
                        color:COLORS.primary,
                        fontWeight:'bold'
                        }}>{title}</Text>
                </View>
            </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    btnPrimary:{
        backgroundColor:COLORS.primary,
        height: 60,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
    }
})