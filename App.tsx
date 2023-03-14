
import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//////////////////////////////////////////

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const second = elapsedTime % 60;
   
  //////////////////////////////////////////
  
const massage: any = ["'Hi! Welcome'", "'We are working on it'", "'Please wait Loading.....'"];
const [text, settext]= useState([massage[0]]);

var String = massage[1];
const wordArray = String.split(" "); 
const wordCount = wordArray.length; 
const num = wordCount * 100;
const sec = num * 10;
const secs = sec + 2000;
const seconds = secs / 1000

if(second == seconds ){
  setElapsedTime(0);
}

    useEffect(()=>{
    setInterval(()=> {
    settext(String);
    }, sec);
    }, [] )


    console.log(`The massage is ${String}.`);
    console.log(`The string has ${wordCount} words.`);
    console.log(`The seconds it tooks = ${seconds}`);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{height:200, width:430, backgroundColor:"blue",alignItems:"center"}}>
       <Text style={{margin:80, fontSize:22}}>{text}</Text>
      </View>

      <View style={{alignItems: "center"}}>
      <Text>{`${second.toString().padStart(2, '0')}`}</Text>
    </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
