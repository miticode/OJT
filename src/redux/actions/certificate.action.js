import axios from "axios";
import {
  ADD_NEW_CERTIFICATES_FAILURE,
  ADD_NEW_CERTIFICATES_REQUEST,
  ADD_NEW_CERTIFICATES_SUCCESS,
  DELETE_CERTIFICATES_FAILURE,
  DELETE_CERTIFICATES_REQUEST,
  DELETE_CERTIFICATES_SUCCESS,
  FETCH_CERTIFICATES_FAILURE,
  FETCH_CERTIFICATES_REQUEST,
  FETCH_CERTIFICATES_SUCCESS,
} from "../actionType";

const API_URL = "https://66806e6756c2c76b495c072b.mockapi.io";
const API_URL_USER =
  "https://667e5671297972455f67ee82.mockapi.io/projectojt/api/v1";

export const getCertificates = (userId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CERTIFICATES_REQUEST });

    try {
      const userResponse = await axios.get(`${API_URL_USER}/users/${userId}`);
      const certificatesIds = userResponse.data.certificates.map(
        (certificate) => certificate.itemNo
      );
      const certificatesResponse = await axios.get(`${API_URL}/certificates`, {
        params: { itemNo: certificatesIds.join("") },
      });
      const filteredCertificates = certificatesResponse.data.filter(
        (certificate) =>
          userResponse.data.certificates.includes(certificate.itemNo)
      );
      dispatch({
        type: FETCH_CERTIFICATES_SUCCESS,
        payload: filteredCertificates,
      });
    } catch (error) {
      dispatch({
        type: FETCH_CERTIFICATES_FAILURE,
        error: error.message,
      });
    }
  };
};

export const deleteCertificate = (userId, certificateId) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_CERTIFICATES_REQUEST });
    try {
      const userResponse = await axios.get(`${API_URL_USER}/users/${userId}`);
      const certificates = userResponse.data.certificates;

      const updatedCertificates = certificates.filter(
        (certificate) => certificate !== certificateId
      );

      await axios.put(`${API_URL_USER}/users/${userId}`, {
        ...userResponse.data,
        certificates: updatedCertificates,
      });

      dispatch({
        type: DELETE_CERTIFICATES_SUCCESS,
        payload: updatedCertificates,
      });
      const updatedUserResponse = await axios.get(
        `${API_URL_USER}/users/${userId}`
      );
      const certificatesIds = updatedUserResponse.data.certificates.map(
        (certificate) => certificate.itemNo
      );
      const certificatesResponse = await axios.get(`${API_URL}/certificates`, {
        params: { itemNo: certificatesIds.join("") },
      });
      const filteredCertificates = certificatesResponse.data.filter(
        (certificate) =>
          updatedUserResponse.data.certificates.includes(certificate.itemNo)
      );
      dispatch({
        type: FETCH_CERTIFICATES_SUCCESS,
        payload: filteredCertificates,
      });
    } catch (error) {
      dispatch({
        type: DELETE_CERTIFICATES_FAILURE,
        error: error.message,
      });
    }
  };
};
export const addCertificate = (userId, newCertificate) => {
  return async (dispatch) => {
    dispatch({ type: ADD_NEW_CERTIFICATES_REQUEST });
    try {
      const userResponse = await axios.get(`${API_URL_USER}/users/${userId}`);
      const certificates = userResponse.data.certificates || [];

      const updatedCertificates = [...certificates, newCertificate.itemNo];

      await axios.put(`${API_URL_USER}/users/${userId}`, {
        ...userResponse.data,
        certificates: updatedCertificates,
      });

      await axios.post(`${API_URL}/certificates`, newCertificate);

      const updatedUserResponse = await axios.get(
        `${API_URL_USER}/users/${userId}`
      );
      const updatedCertificatesIds = updatedUserResponse.data.certificates;

      const certificatesResponse = await axios.get(`${API_URL}/certificates`, {
        params: { itemNo: updatedCertificatesIds.join(",") },
      });

      dispatch({
        type: ADD_NEW_CERTIFICATES_SUCCESS,
        payload: certificatesResponse.data,
      });
    } catch (error) {
      dispatch({
        type: ADD_NEW_CERTIFICATES_FAILURE,
        error: error.message,
      });
    }
  };
};
