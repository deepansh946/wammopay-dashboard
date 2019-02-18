import localStoreWrite from '../browser/localStoreWrite';
import localStoreRemove from '../browser/localStoreRemove';
import cookieWrite from '../browser/cookieWrite';
import cookieRemoveAll from '../browser/cookieRemoveAll';
import { SIGN_IN, SIGN_OUT } from '../constants';

export const initialState = {
  statusCode: 404,
  isError: false,
  error: '',

  message: '',
  isSignedIn: false
};

export default function reducer(state, action) {
  switch (action.type) {
    case SIGN_IN: {
      const { payload } = action;
      //   console.log(payload);
      const { Email, UserName } = payload;
      //   console.log('Reducer Called');

      localStoreWrite('user', payload);
      cookieWrite('isSignedIn', true);
      cookieWrite('email', Email);
      cookieWrite('username', UserName);
      console.log('Hi');

      return {
        ...state,
        isSignedIn: true,
        Email,
        UserName
      };
    }
    case SIGN_OUT: {
      cookieRemoveAll();
      localStoreRemove('user');

      return initialState;
    }
    default:
      return initialState;
  }
}
