import { SET_PROFILE } from '@store/actionTypes/authActionTypes';

const initialState: UserProfileProps = {
  name: '',
  email: '',
  avatar: '',
};

export const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PROFILE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
