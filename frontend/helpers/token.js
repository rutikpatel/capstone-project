import * as SecureStore from 'expo-secure-store';

export default async function Token(key='token') {
    let result = await SecureStore.getItemAsync(key);
    if(result)
      return true
    return false
  }



