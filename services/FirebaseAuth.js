import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from '@react-native-firebase/storage';
import uuid from 'react-native-uuid';
import auth from '@react-native-firebase/auth';

export const saveUser = async (authId, data) => {
  try {
    const response = await firestore()
      .collection('users')
      .doc(authId)
      .set(data, {merge: true});
    return response;
  } catch (error) {
    throw error;
  }
};

export const saveCategories = async data => {
  try {
    const response = await firestore()
      .collection('categories')
      .doc('categoryList')
      .set(data, {merge: true});
    // .doc(authId)
    // .set(data, {merge: true});
    return response;
  } catch (error) {
    throw error;
  }
};
export const getCategories = async () => {
  // console.log('UserId', userId);
  try {
    const user = await firestore().collection('categories').doc('categoryList').get();
    return user.data();
  } catch (error) {
    // console.log('getUser line 51', error);
    throw error;
  }
};
export const getSpecificeUser = async userId => {
  console.log('UserId', userId);
  try {
    const user = await firestore().collection('users').doc(userId).get();
    return user.data();
  } catch (error) {
    // console.log('getUser line 51', error);
    throw error;
  }
};
export const getUser = setData => {
  const shop = [];
  try {
    firestore()
      .collection('users')
      .get()
      .then(datingSnapshot => {
        datingSnapshot?.forEach(dating => {
          shop.push(dating.data());
        });
        setData(shop);
      });
  } catch (error) {
    throw error;
  }
};

export const signout = async () => {
  return auth().signOut();
};

// export const getUser = (setAuthData, authId,) => {
//   try {
//     return firestore().collection("users").onSnapshot((querySnap) => {
//       const announcements = [];
//       querySnap.forEach((announcement) => {
//         let temp = announcement.data();
//         // console.log("tempData",temp)
//         // if (temp.id != authId) {
//         //   announcements.put(temp)

//         // }

//         setAuthData(announcement.data());

//       });

//     });
//   } catch (error) {
//     console.log("user error", error);
//   }
// };

export const uploadImage = async (uri, path) => {
  console.log('ImagrAndPath', uri, path);
  try {
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = storage().ref(path + uuid.v4());
    const task = ref.put(blob);
    return new Promise((resolve, reject) => {
      task.on(
        'state_changed',
        () => {},
        err => {
          reject(err);
        },
        async () => {
          const url = await task.snapshot.ref.getDownloadURL();
          resolve(url);
        },
      );
    });
  } catch (err) {
    console.log('uploadImage error: ' + err.message);
  }
  try {
    const response = await fetch(uri);
    const blob = await response.blob();
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const ref = storage().ref().child(filename).put(blob);
    const link = await (await ref).ref.getDownloadURL();
    return link;
  } catch (error) {
    // console.log("upload error", error);
  }
};

export const getAuthId = async () => await AsyncStorage.getItem('userAuth');
