import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GetDetailResponse, PersonDetailState, Picture } from './types'

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
    addImage(state, action: PayloadAction<{ id: string; file: File }>) {
      state.isLoading = true
    },
    addImageSuccess(state, action: PayloadAction<Picture>) {
      state.isLoading = false
      if (state.personsDetail) {
        console.log(action.payload)

        state.personsDetail.picture_id = action.payload
      }
    },
  },
})

export const {
  getPersonDetail,
  getPersonDetailSuccess,
  getPersonDetailError,
  addImage,
  addImageSuccess,
} = personDetailSlice.actions

export default personDetailSlice.reducer
