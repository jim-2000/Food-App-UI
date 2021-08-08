import React,{useState} from 'react'
import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import COLORS from '../../const/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';
import categories from '../../const/categories'
import foods from '../../const/foods';

//

const {width} = Dimensions.get("screen")
const CardWidth = width/2 - 20 ;
const HomeScreen = ({navigation}) => {

    const [indexSelected, setIndexSelected] = useState(0)

const ListCatagorys = ()=>{
    return( 
    <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.catagoryListContainer}
    >
{ categories.map((cata,index)=>(
        <TouchableOpacity key={index} activeOpacity={0.8}
        onPress={()=>setIndexSelected(index)}
        
        >
            <View style={{
                backgroundColor:indexSelected == index ? COLORS.primary : COLORS.secondary,
                ...styles.catagoryBtn
                }}>
                <View style={styles.catagoryBtnImgconTainer}>
                    <Image source={cata.image} style={{width:35,height:35,resizeMode:'cover'}} />                        
                </View>
              <Text style={{fontSize:15,fontWeight:'bold',marginLeft:10,color:indexSelected == index ? COLORS.white : COLORS.primary}}> {cata.name}</Text>
            </View>
        </TouchableOpacity>
    ))
}
    </ScrollView>
    
    )
}

// card

const Card =({food})=>{
    return(
        <TouchableOpacity 
        style={styles.card}
        activeOpacity={0.7}
        underlayColor={COLORS.white}
        onPress={()=>navigation.navigate("DETAILS",food)}
        >
            <View style={{alignItems:'center',top:-40}}>
                <Image source={food.image}
                 style={{height:120,width:120}} />
            </View>
            <View style={{marginHorizontal:20}}>
                <Text style={{fontSize:18,fontWeight:'bold'}}>{food.name}</Text>
                <Text style={{fontSize:14,color:COLORS.grey,marginTop:2}}>{food.name}</Text>
            </View>
            <View style={{flexDirection:'row',marginTop:10,marginHorizontal:20,justifyContent:'space-between'}}>
                <Text style={{fontSize:18,fontWeight:'bold'}}>${food.price}</Text>
                <TouchableOpacity 
                activeOpacity={0.4}               
                style={styles.addToCart}
                
                >
                    <Icon name="add" size={20} color={COLORS.white} />
                </TouchableOpacity>            
            </View>
        </TouchableOpacity>
    )
}


    return (
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
            <View style={styles.header}>
               
               <View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:28}}>Hello</Text>
                        <Text style={{fontSize:28, fontWeight:'bold',marginLeft:5,}}>JIM</Text>
                    </View>
                    <Text style={{fontSize:22,marginTop:5,color:COLORS.grey}}>What do you want today</Text>
               </View>
              <Image source={require('../../assets/me.jpg')} style={{height:50,width:50,borderRadius:25}} />
          
             
            </View>
            <View style={{
                marginTop:40,
                flexDirection:'row',
                paddingHorizontal:20,

            }}>
                <View style={styles.inputContainer}>
                    <Icon name="search" size={28} />
                    <TextInput style={{flex:1,fontSize:18,}} placeholder="Search for Food" />
                </View>
                <View style={styles.sortBtn}>
                     <Icon name="tune" size={28} color={COLORS.white} />
                </View>
            </View>
            <View>
                <ListCatagorys />
            </View>
            <FlatList 
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={foods}
            renderItem={({item})=><Card food={item} />}
            />

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    header:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20
    },
    inputContainer:{
        flex: 1,
        flexDirection:'row',
        paddingHorizontal:20,
        backgroundColor:COLORS.light,
        height: 50,
        borderRadius:10,
        alignItems:'center',
    },
    sortBtn:{
        backgroundColor:COLORS.primary,
        width: 50,
        height: 50,
        marginLeft:10,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    catagoryListContainer:{
     paddingVertical:30,
     alignItems:'center',
     paddingHorizontal:20   
    },
    catagoryBtn:{
        height: 45,
        width: 120,
        marginRight:7,
        borderRadius:30,
        alignItems:'center',
        paddingHorizontal:5,
        flexDirection:'row'
    },
    catagoryBtnImgconTainer:{
        height: 35,
        width: 35,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        backgroundColor:COLORS.white
    },
    card:{
        height: 220,
        width: CardWidth,
        marginHorizontal:10,
        marginBottom:20,
        marginTop:50,
        borderRadius:15,
        elevation:13,
        backgroundColor:COLORS.white,
    },
    addToCart:{
        height: 30,
        width: 30,
        borderRadius:20,
        backgroundColor:COLORS.primary,
        justifyContent:'center',
        alignItems:'center',
    }
})
