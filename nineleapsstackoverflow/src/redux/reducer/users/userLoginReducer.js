import {
    
    USER_LOGIN_REQUEST,  
    USER_LOGIN_SUCCESS,  
    USER_LOGIN_FAIL,  
    } from '../../action/actionTypes'


const initialState = {
    loading: false,
    data: {},
    error: ''
  }
  const userLoginReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return {
          ...state,
          loading: true
        }
      case USER_LOGIN_SUCCESS:
        return {
          loading: false,
          data: action.payload,
          error: ''
        }
      case USER_LOGIN_FAIL:
        return {
          loading: false,
          data: {},
          error: action.payload
        }
      default: return state
    }
  }

export default userLoginReducer;















