import localStoreWrite from '../browser/localStoreWrite';
import localStoreRemove from '../browser/localStoreRemove';
import cookieWrite from '../browser/cookieWrite';
import cookieRemoveAll from '../browser/cookieRemoveAll';
import { SIGN_ON, SIGN_IN, SIGN_OUT } from '../constants';

export const initialState = {
  statusCode: 404,
  isError: false,
  error: '',

  message: '',
  isSignedIn: false
};

export default function reducer(state, action) {
  switch (action.type) {
    case SIGN_ON: {
      const { payload } = action;

      localStoreWrite('token', payload);

      return {
        ...state
      };
    }
    case SIGN_IN: {
      const { payload } = action;
      //   console.log(payload);
      const { id, email, username, phoneNumber, role } = payload;
      //   console.log('Reducer Called');

      cookieWrite('isSignedIn', true);
      cookieWrite('email', email);
      cookieWrite('username', username);
      cookieWrite('phoneNumber', phoneNumber);
      cookieWrite('role', role);
      cookieWrite('id', id);

      return {
        ...state,
        isSignedIn: true,
        email,
        username,
        phoneNumber,
        role
      };
    }
    case SIGN_OUT: {
      cookieRemoveAll();
      localStoreRemove('token');

      return initialState;
    }
    default:
      return initialState;
  }
}
