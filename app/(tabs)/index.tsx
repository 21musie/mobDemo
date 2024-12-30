import { StyleSheet,Text, View, ScrollView, SafeAreaView, SectionList } from "react-native";
import contactList from './data.json';
import AnimalList from './groupedData.json';
import { StatusBar } from "expo-status-bar";
export default function App (){
  return (
  <SafeAreaView style={styles.container}> 
  <SectionList
  sections={AnimalList}
  renderItem={({item})=>{
    return(
      <View style={styles.card}>
        <Text style={styles.cardText}{item}</Text>
      </View>
    );
  }}
</SafeAreaView>
);
}   

const styles=StyleSheet.create({
  container: {
  flex:1, backgroundColor: "#f5f5f5",
  } ,
  scrollView:{
  paddingHorizontal:16,
  },
  card: {
  backgroundColor: "white", 
  padding: 16, 
  borderRadius: 8, 
  borderWidth:1,
  marginBottom: 16,
  },
  cardText: {
  fontSize: 30,
  }
  }) ;