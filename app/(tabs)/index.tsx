// import { StyleSheet,Text, View, ScrollView, SafeAreaView, SectionList } from "react-native";
// import contactList from './data.json';
// import AnimalList from './groupedData.json';
// import { StatusBar } from "expo-status-bar";
// export default function App (){
//   return (
//   <SafeAreaView style={styles.container}> 
//   <SectionList
//   sections={AnimalList}
//   renderItem={({item})=>{
//     return(
//       <View style={styles.card}>
//         <Text style={styles.cardText}{item}</Text>
//       </View>
//     );
//   }}
// </SafeAreaView>
// );
// }   

// const styles=StyleSheet.create({
//   container: {
//   flex:1, backgroundColor: "#f5f5f5",
//   } ,
//   scrollView:{
//   paddingHorizontal:16,
//   },
//   card: {
//   backgroundColor: "white", 
//   padding: 16, 
//   borderRadius: 8, 
//   borderWidth:1,
//   marginBottom: 16,
//   },
//   cardText: {
//   fontSize: 30,
//   }
//   }) ;

import { StyleSheet, Text, View, SafeAreaView, SectionList } from "react-native";
import contactList from './data.json';
import AnimalList from './groupedData.json';
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <SectionList
        sections={AnimalList}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
            </View>
          );
        }}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#f5f5f5',
    padding: 8,
  },
});