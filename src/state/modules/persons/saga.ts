import { API, Routes } from 'API'
import { call, put, select, takeEvery } from 'redux-saga/effects'
import { RootState } from 'state/types'
import { getMorePersonsSuccess, getPersonsSuccess } from './slice'
import { GetPersonsResponse } from './types'

const LIMIT = 100

function* workGetPersons(): Generator {
  const response = yield call(API.get, Routes.PERSONS_LIST, {
    start: 0,
    limit: LIMIT,
  })

  yield put(getPersonsSuccess(response as GetPersonsResponse))
}

function* workGetMorePersons(): Generator {
  const state = yield select()

  const currentDataLength = (state as RootState).persons.persons.length

  const response = yield call(API.get, Routes.PERSONS_LIST, {
    limit: LIMIT,
    start: currentDataLength,
  })

  yield put(getMorePersonsSuccess(response as GetPersonsResponse))
}

function* personSaga() {
  yield takeEvery('persons/getPersons', workGetPersons)
  yield takeEvery('persons/fetchMorePersons', workGetMorePersons)
}

export default personSaga
