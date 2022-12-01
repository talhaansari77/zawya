import constants from '../constants';

const initialState = {
  favoriteList: [],
};
const myFavoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_FAVORITE: {
      let newState = {...state};

      if (action.payload.checkboxValue) {
        console.log('ADD TO favoriteList');

        let favoriteExist = state.favoriteList.find(
          store => store.id === action.payload.id,
        );
        // same store check
        if (!favoriteExist) {
          newState.favoriteList = [...state.favoriteList, {...action.payload}];
        }
        // console.log(newState);
        // return newState;
      } else {
        console.log('REMOVE FROM favoriteList');

        newState.favoriteList = [
          ...newState.favoriteList.filter(store => store.id !== action.payload.id),
        ];
      }
      console.log(newState);
      return newState;
    }

    default:
      return state;
  }
};

export default myFavoriteReducer;
