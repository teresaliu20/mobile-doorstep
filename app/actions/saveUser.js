import Types from './actionTypes';
import axios from 'axios';
import domain from '../domain';

export function saveUser(username, password) {
  return dispatch => {
    dispatch({
      type: Types.saveUserRequested
    });
    const error = false;
    axios.post(domain + '/api/auth/login', {
      username: username,
      password: password
    })
    .then(respJson => {
      console.log("FULFILLED", respJson.data.user);
      const user = respJson.data.user;
      axios.get(domain + '/api/calculate-stats/' + user._id)
      .then((resp2Json) => {
        console.log("USER LOGGED IN AND SAVED");
        return dispatch({
          type: Types.saveUserFulfilled,
          user: resp2Json.data.user
        });
      });
    })
    .catch(error => {
      console.log("ERROR LOGGING IN", error);
      return dispatch({
        type: Types.saveUserRejected,
        error: error
      });
    });
  };
}
