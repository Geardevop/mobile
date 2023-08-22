import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={{marginBottom:10}}>
            <Image
              style={{width:150, height: 120,}}
              source={require('./assets/IT_Logo.png')}
            ></Image>
        </View>
        <View>
          <Text style={{fontSize:20, fontWeight:'bold'}}>คณะเทคโนโลยีสารสนเทศ</Text>
        </View>
        <View >
          <Text style={{fontSize:13}}>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</Text>
        </View>
        <StatusBar style="auto" />
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity
          title='PROGRAMS'
          style={styles.button}
        >
            <Text style={{color:'white'}}>PROGRAMS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          title='PROGRAMS'
          style={styles.button}
        >
            <Text style={{color:'white'}}>ABOUT US</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerButton:{
    alignItems: 'center',
    justifyContent: 'center',
    padding:10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2196F3',
    height: 30,
    width: 200,
    marginTop: 10,
    justifyContent: 'center',
    shadowColor:'#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 5,
  },
});
