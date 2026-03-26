import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { User, LoginCredentials, LoginResponse } from '../../types/auth';

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

// createAsyncThunk<ReturnType, ArgType, { rejectValue: ErrorType }>
export const loginUser = createAsyncThunk<
  LoginResponse,       // fulfilled payload type
  LoginCredentials,    // argument type
  { rejectValue: string } // rejected payload type
>(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) throw new Error('Login failed');
      return (await res.json()) as LoginResponse;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      return rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        // action.payload is typed as string | undefined
        state.error = action.payload ?? 'Something went wrong';
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;