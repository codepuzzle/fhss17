import { createStore } from 'redux';

const initialState = {
  grills: []
};

const grillReducer = function(state = initialState, action) {
  console.log("Wir haben folgende Action getriggert:", action.type, action);
  switch (action.type) {

    case 'GRILLS_LOADED':
      return {
        ...state,
        grills: action.data
      };

    default:
      return state;
  }
};

const store = createStore(grillReducer);

export default store;
