import { StyleSheet,Text, View, ScrollView, SafeAreaView } from "react-native";
import contactList from './data.json';
import { StatusBar } from "expo-status-bar";
export default function App (){
  return (
  <SafeAreaView style={styles.container}> 
  <ScrollView style={styles.scrollView}>
  {
    contactList.map(contact=>{
      return(
        <View style={styles.card} key={contact.id}>
        <Text style={styles.cardText}>{contact.name}</Text>
        <Text style={styles.cardText}>{contact.phoneNumber} </Text>
</View> 
    );
  })}

    </ScrollView>
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