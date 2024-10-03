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

const initialState = {
  loading: false,
  certificates: [],
  error: "",
};

const certificatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CERTIFICATES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CERTIFICATES_SUCCESS:
      return {
        ...state,
        loading: false,
        certificates: action.payload,
        error: "",
      };
    case FETCH_CERTIFICATES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case DELETE_CERTIFICATES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_CERTIFICATES_SUCCESS:
      // const updatedCertificates = state.certificates.filter(
      //   (certificate) => certificate.itemNo !== action.payload
      // );
      return {
        ...state,
        certificates: action.payload,
        loading: false,
        error: null,
      };
    case DELETE_CERTIFICATES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
      case ADD_NEW_CERTIFICATES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case ADD_NEW_CERTIFICATES_SUCCESS:
        
        return {
          ...state,
          certificates: [...state.certificates, action.payload],
          loading: false,
          error: null,
        };
      case ADD_NEW_CERTIFICATES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
  

    default:
      return state;
  }
};

export default certificatesReducer;
