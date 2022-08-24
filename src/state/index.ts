import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleWare from 'redux-saga'
import personsReducer from './modules/persons/slice'
import personsSaga from './modules/persons/saga'
import { all } from 'redux-saga/effects'

const saga = createSagaMiddleWare()

export default function* rootSaga() {
  yield all([personsSaga()])
}

export const store = configureStore({
  reducer: {
    persons: personsReducer,
  },
  middleware: [saga],
})

saga.run(personsSaga)
