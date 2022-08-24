import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GetDetailResponse, PersonDetailState } from './types'

const initialState: PersonDetailState = {
  personsDetail: null,
  error: null,
  isLoading: false,
}

const personDetailSlice = createSlice({
  name: 'personDetail',
  initialState,
  reducers: {
    getPersonDetail(state, action: PayloadAction<string>) {
      state.isLoading = true
    },
    getPersonDetailSuccess(state, action: PayloadAction<GetDetailResponse>) {
      state.personsDetail = action.payload.data
      state.isLoading = false
    },
    getPersonDetailError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const { getPersonDetail, getPersonDetailSuccess, getPersonDetailError } =
  personDetailSlice.actions

export default personDetailSlice.reducer
