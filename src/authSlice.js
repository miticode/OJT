import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from 'firebase/auth';
import { auth } from './firebaseConfig';

export const socialLogin = createAsyncThunk(
  'auth/socialLogin',
  async ({ providerName }, { rejectWithValue }) => {
    let authProvider;

    switch (providerName) {
      case 'Facebook':
        authProvider = new FacebookAuthProvider();
        break;
      case 'Twitter':
        authProvider = new TwitterAuthProvider();
        break;
      case 'Google':
        authProvider = new GoogleAuthProvider();
        break;
      default:
        return rejectWithValue('Invalid provider');
    }

    try {
      const result = await signInWithPopup(auth, authProvider);
      return { ...result.user, role: 'student' };
    } catch (error) {
      console.error('Error during social login:', error); // Thêm log lỗi
      return rejectWithValue(error.message);
    }
  }
);


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    error: null,
    loading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(socialLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(socialLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(socialLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setUser, setError, clearError } = authSlice.actions;

export default authSlice.reducer;
