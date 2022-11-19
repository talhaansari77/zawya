import constants from '../constants';

const initialState = {
  coinsList: [],
};
const myCoinReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_COIN: {
      let newState = {...state};

      if (action.payload.checkboxValue) {
        console.log('ADD TO coinsList');

        let coinExist = state.coinsList.find(
          coin => coin.id === action.payload.id,
        );
        // same coin check
        if (!coinExist) {
          newState.coinsList = [...state.coinsList, {...action.payload}];
        }
        // console.log(newState);
        // return newState;
      } else {
        console.log('REMOVE FROM coinsList');

        newState.coinsList = [
          ...newState.coinsList.filter(coin => coin.id !== action.payload.id),
        ];
      }
      console.log(newState);
      return newState;
    }

    default:
      return state;
  }
};

export default myCoinReducer;
