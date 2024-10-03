import axios from 'axios';
import { UPDATE_USER_FAILURE, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from '../actionType';





export const updateUserRequest = () => ({
  type: UPDATE_USER_REQUEST,
});

export const updateUserSuccess = (user) => ({
  type: UPDATE_USER_SUCCESS,
  payload: user,
});

export const updateUserFailure = (error) => ({
  type: UPDATE_USER_FAILURE,
  payload: error,
});


export const updateUser = (userId, firstName, lastName,headline,description,mysite,facebookbprofile,twitterprofile,linkedinprofile,youtubeprofile,academyname, country, addressline1, addressline2, city, province, zip,phonenumber,youraddress,swiftcode,backaccountnumber,fullname,backname,backaddress) => {
  return async (dispatch) => {
    dispatch(updateUserRequest());
    try {
      const response = await axios.put(`https://667e5671297972455f67ee82.mockapi.io/projectojt/api/v1/users/${userId}`, {
        firstname: firstName,
        lastname: lastName,
        headline: headline,
        description: description,
        mysite: mysite,
        facebookbprofile: facebookbprofile,
        twitterprofile: twitterprofile,
        linkedinprofile: linkedinprofile,
        youtubeprofile: youtubeprofile,
        academyname: academyname,
        country: country,
        addressline1: addressline1,
        addressline2: addressline2,
        city: city,
        province:province,
        zip: zip,
        phonenumber: phonenumber,
        youraddress: youraddress,
        swiftcode: swiftcode,
        backaccountnumber: backaccountnumber,
        fullname: fullname,
        backname: backname,
        backaddress:backaddress,

      });
      dispatch(updateUserSuccess(response.data));
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };
};
