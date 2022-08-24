import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
  },
})

export const {
  getPersons,
  getPersonsFailure,
  getPersonsSuccess,
  fetchMorePersons,
  getMorePersonsSuccess,
} = personSlice.actions

export default personSlice.reducer
