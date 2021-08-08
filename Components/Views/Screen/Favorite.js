import React,{useState} from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import COLORS from '../../const/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PrimaryButton } from '../../const/Button';
import foods from '../../const/foods';

const Favorite = ({navigation}) => {
    const [isSelected, setisSelected] = useState(false)

    const CartCard= ({food})=>{
        return(
            <View style={styles.CartCard}>
                <Image source={food.image} style={{height:80,width:80}} />
                <View
                style={{
                    height: 100,
                    marginLeft:10,
                    paddingVertical:20,
                    flex: 1,
                }}
                >
                    <Text style={{fontWeight:'bold',fontSize:16}}>{food.name}</Text>
                    <Text style={{fontSize:13,color:COLORS.grey}}>{food.ingredients}</Text>
                    <Text style={{fontSize:17,color:COLORS.grey,fontWeight:'bold'}}>${food.price}</Text>
                </View>
                <TouchableOpacity style={{marginRight:20,alignItems:'center'}}
                onPress={()=>setisSelected(!isSelected)}
                >                
                        <Icon name="favorite"  size={25} 
                        color={
                            isSelected ? COLORS.primary : COLORS.primary
                        }                       
                        />
                      
                </TouchableOpacity>
            </View>
        )
    }





    return (
        <SafeAreaView
        style={{backgroundColor:COLORS.white}}
        >
            <View style={styles.header}>
            <Icon name="arrow-back-ios"  size={28} 
                color={COLORS.dark}
                onPress={navigation.goBack}/>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Favorite</Text>
            </View>
            <FlatList 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:80}}
            ListFooterComponentStyle={{paddingHorizontal:20,marginTop:20}}
            data={foods}
            renderItem={({item})=><CartCard food={item} />}
            ListFooterComponent={()=>(
                <View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:15}}>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>Total Price</Text>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>$50</Text>
                    </View>
                    <View style={{marginHorizontal:30}}>
                        <PrimaryButton title="Checkout Now" />
                    </View>
                </View>
            )}
            />
        </SafeAreaView>
    )
}

export default Favorite

const styles = StyleSheet.create({
    header:{
        paddingVertical:20,flexDirection:'row',marginHorizontal:20,alignItems:'center'
    },
    CartCard:{
        height: 100,
        elevation:15,
        borderRadius:10,
        backgroundColor:COLORS.white,
        marginHorizontal:10,
        paddingHorizontal:20,
        flexDirection:'row',
        marginVertical:20,
        alignItems:'center'
    },
    ActionBtn:{
        width: 80,
        height: 30,
        backgroundColor:COLORS.primary,
        borderRadius:30,
        paddingHorizontal:5,
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center'

    }
})
