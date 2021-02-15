import {
    
    USER_LOGIN_REQUEST,  
    USER_LOGIN_SUCCESS,  
    USER_LOGIN_FAIL,  
    } from '../actionTypes'

    import {axios} from 'axios'

export const userLoginAction = (response) => {
    return async(dispatch) => {
      try{
      dispatch(userLoginRequest())
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        '/api/users/login',
        response.tokenId,
        config
      );

      dispatch(userLoginSuccess(data))
      localStorage.setItem('userAuthData', JSON.stringify(data.token));
      }catch(error) {
          // error.message is the error message
          dispatch(userLoginFailure(error.message))
        }
    }
  }
  export const userLoginRequest = () => {
    return {
      type: USER_LOGIN_REQUEST
    }
  }
  export const userLoginSuccess = data => {
    return {
      type: USER_LOGIN_SUCCESS,
      payload: data
    }
  }
  export const userLoginFailure = error => {
    return {
      type: USER_LOGIN_FAIL,
      payload: error
    }
  }





