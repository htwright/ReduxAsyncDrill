import {
    SEARCH_ARTISTS_REQUEST,
    SEARCH_ARTISTS_SUCCESS,
    SEARCH_ARTISTS_ERROR,
    searchArtists
} from './actions';

const initialState = {
  artists: [],
  loading: false,
  error: null
};

export function spotifyReducer(state=initialState, action) {
    // Handle these sync actions
  if (action.type === SEARCH_ARTISTS_REQUEST) {
    // return searchArtists(action.query);
    return Object.assign({}, state, {
      loading: true,
      artists:[],
      error: null
    });
  }
  else if (action.type === SEARCH_ARTISTS_SUCCESS) {
    let newData = action.artists;
    console.log(newData);
    return Object.assign({}, state, {
      artists:newData,
      loading:false
    });
  }
  else if (action.type === SEARCH_ARTISTS_ERROR) {
    console.log(action.error);
    return Object.assign({}, state, {
      loading:false,
      error:action.error
    });
  }
  return state;
}
