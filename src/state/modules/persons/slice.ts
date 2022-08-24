import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Picture } from '../personDetail/types'
import { GetPersonsResponse, PersonState } from './types'

const initialState: PersonState = {
  persons: [],
  isLoading: false,
  error: null,
  hasNext: true,
  nextPage: 0,
}

const personSlice = createSlice({
  name: 'persons',
  initialState,
  reducers: {
    getPersons(state) {
      state.isLoading = true
    },
    getPersonsSuccess(state, action: PayloadAction<GetPersonsResponse>) {
      state.persons = action.payload.data
      state.isLoading = false
    },
    getMorePersonsSuccess(state, action: PayloadAction<GetPersonsResponse>) {
      state.persons = [...state.persons, ...action.payload.data]
      state.hasNext = action.payload.additional_data.pagination.more_items_in_collection
      state.isLoading = false
    },
    getPersonsFailure(state, action) {
      state.isLoading = false
      state.error = action.payload
    },
    fetchMorePersons(state) {
      state.isLoading = true
    },
    updateListUserImage(state, action: PayloadAction<{ id: string; picture: Picture }>) {
      const payload = action.payload

      const user = state.persons?.find((item) => item.id === payload.id)

      if (user) {
        user.picture_id = payload.picture
      }
    },
  },
})

export const {
  getPersons,
  getPersonsFailure,
  getPersonsSuccess,
  fetchMorePersons,
  getMorePersonsSuccess,
  updateListUserImage,
} = personSlice.actions

export default personSlice.reducer
