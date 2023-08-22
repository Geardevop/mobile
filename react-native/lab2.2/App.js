import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text, View, Animated, StyleSheet,Image, TouchableOpacity} from 'react-native';

// const AnimatedHeader = ({ animatedValue }) => {
//   // ...
//   return (
//     <Animated.View 
//         style={[
//           styles.header,
//           {
//             height: animateHeaderHeight,
//             backgroundColor: animateHeaderBackgroundColor
//           }

//         ]}
//       >
//         <View style={{
//           flexDirection: 'row',
//         }}>
//               <Image
//               style={{width:50, height: 50}}
//               source={require('./assets/IT_Logo.png')}
//             ></Image>
//              <View style={{alignItems:'center', justifyContent:'center'}}>
//               <Text>PROGRAMS</Text>
//             </View>
//         </View>
//         <Text style={styles.headerText}>
//           A List of Books
//         </Text>         
//     </Animated.View>
//   );
// };
export default function App() {
  // let scrollOffsetY = useRef(new Animated.Value(0)).current;  
  return (
    <>
     <View style={{
          flexDirection: 'row',
          width:'100%',
          backgroundColor:'#b0dce4',
          height:80,
          padding:20
        }}>
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <Image
              style={{width:40, height: 35, alignItems:'center',alignContent:'center'}}
              source={require('./assets/IT_Logo.png')}
              ></Image>
            </View> 
             <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
              <Text style={{fontSize:30, fontWeight:'bold', color:'darkblue'}}>PROGRAMS</Text>
            </View>
        </View>
        <SafeAreaView>
          <ScrollView>
            <DetailComponent></DetailComponent>
          </ScrollView>
        </SafeAreaView>
    </>
  );
}
const DetailComponent = () =>{
  return (
    <>
      <View >
        <Image source={require('./assets/course-bach-it.jpg')}>
        </Image>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={{color:"white"}}>Information Technology</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image source={require('./assets/course-bach-dsba.jpg')}>
        </Image>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={{color:"white"}}>Data Science and Business Analytics</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image source={require('./assets/course-bach-bit.jpg')}>
        </Image>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={{color:"white"}}> Business Information Technology </Text>
          <Text style={{color:"white"}}> (International Program) </Text>
        </TouchableOpacity>
      </View>
      <View >
        <Image source={require('./assets/course-bach-ait.jpg')}>
        </Image>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={{color:"white"}}>Artificial Intelligence Techology</Text>
        </TouchableOpacity>
      </View>
      <View >
        <TouchableOpacity
            style={styles.button}
          >
            <Text style={{color:"white"}}>Artificial Intelligence Techology</Text>
          </TouchableOpacity>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    height:70,
    backgroundColor: 'grey',
    width: '100%',
    justifyContent: 'center',
  },
});
