import React from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Post = {user: "amal", avatar: "https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg", date: "28/08/2000", texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", picture: "https://source.unsplash.com/random?sig="};

const WindowWidth =  Dimensions.get('window').width;
const WindowHeight =  Dimensions.get('window').height;

const Card = () => {
  return (
    <SafeAreaView>
        <View style={{ width: WindowWidth * 0.7,  borderWidth: 1, alignSelf: 'center' }}>
            
            <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center', width: "100%",}}

            >
                <Image 
                    style={{width: WindowWidth * 0.1, height: WindowHeight * 0.05, borderRadius: 150}}
                    source={{ uri: Post.avatar}}
                />

                <View style={{  marginLeft: "5%"}}>
                    <Text style={{ fontSize: 18 }} >{Post.user}</Text>
                    <Text style={{ fontSize: 10 }} >{Post.date}</Text>
                </View>
            </TouchableOpacity>

           <View>
                <Text style={{ fontSize: 16 }} >{Post.texte}</Text>
                <Image 
                    style={{width: WindowWidth * 0.7, height: WindowHeight * 0.3, borderRadius: 0}}
                    source={{ uri: Post.picture}}
                />
           </View>
        </View>
        
    </SafeAreaView>
  )
}

export default Card