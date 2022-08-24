import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleWare from 'redux-saga'
import personsReducer from './modules/persons/slice'
import personDetailReducer from './modules/personDetail/slice'

import personsSaga from './modules/persons/saga'
import personDetailSaga from './modules/personDetail/saga'

import { all } from 'redux-saga/effects'

const saga = createSagaMiddleWare()

export default function* rootSaga() {
  yield all([personDetailSaga(), personsSaga()])
}

export const store = configureStore({
  reducer: {
    persons: personsReducer,
    personDetail: personDetailReducer,
  },
  middleware: [saga],
})

saga.run(rootSaga)
