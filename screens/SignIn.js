import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
  import "../firebaseConfig";
  import { View, Text, Image, TouchableOpacity, TextInput, ImageBackground } from "react-native";
  import React, { useEffect } from "react";
  import { useNavigation } from "@react-navigation/native";
  
  const SignIn = () => {
    const navigation = useNavigation();
    const auth = getAuth();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
  
    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log('user signed in')
            navigation.navigate("Home");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
          });
    };
  
    return (
      <View className="flex flex-1 justify-center items-center relative mx-4">
        {/* <Text>Hello</Text> */}
        <View className=' space-y-6 w-full '>
          <Text className='text-lg'>Sign In</Text>
          <Text className=" text-[#00CCBB] text-7xl font-bold tracking-widest text-center">
            Deliveroo
          </Text>
          <TextInput
            placeholder="Enter your Email"
            placeholderTextColor={'#00CCBB'}
            value={email}
            onChangeText={(text)=>{setEmail(text)}}
            className="  h-14 rounded-lg w-full px-4 text-lg  border-[1px] border-gray-500 focus:border-[2px]"
          />
          <TextInput
            placeholder="Enter your Password"
            placeholderTextColor={'#00CCBB'}
            value={password}
            onChangeText={(text)=>{setPassword(text)}}
            secureTextEntry={true}
            className="  h-14 rounded-lg w-full px-4 text-lg border-[1px] border-gray-500 focus:border-[2px]"
          />
        </View>
  
        
        {/* <Image
          source={{
            uri: "https://images.unsplash.com/photo-1530554764233-e79e16c91d08?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          className="h-full w-full opacity-1 -z-10 absolute top-0 left-0 right-0 bottom-0"
          blurRadius={10}
          resizeMode="cover"
        /> */}
  
        <TouchableOpacity
          className="py-4 bg-orange-500 z-10 absolute bottom-5 rounded-lg left-0 right-0 m-auto mx-0"
          onPress={() => handleSignIn()}
        >
          <Text className="text-white text-center text-xl tracking-wider">
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default SignIn;
  