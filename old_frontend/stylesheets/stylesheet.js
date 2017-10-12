import { StyleSheet } from 'react-native';

// paleblue: #e8f1f2
// comfyblue: #639fff
// solidblue: #192bc2
// darkblue: #141b41
// slate: #696d7d

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginscreen: {
    flex: 1,
    backgroundColor: '#639fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 2,
  },

  lildiv :{
    height: 300,
    color: 'black'
  },

  bigblue: {
    color: '#e8f1f2',
    fontWeight: 'bold',
    fontSize: 50,
    height: 70,
    borderBottomColor: '#e8f1f2',
    borderBottomWidth: 5
  },
});
