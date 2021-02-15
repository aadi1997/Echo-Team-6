import React from "react";
import GoogleLogin from "react-google-login";
import {useDispatch} from "react-redux";
import {userLoginAction }from "../redux/action/users/userLoginAction";

const GoogleLogins=()=>{

    const dispatch= useDispatch();

    return(<GoogleLogin
        clientId="601534516278-jpkuqoe0ckbt48o9kohl8ueg18miktjd.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={(response)=>dispatch(userLoginAction(response))}
        onFailure={(response)=>dispatch(userLoginAction(response))}
        cookiePolicy={"single_host_origin"}
        />)

}

export default GoogleLogins;