import { PayloadAction } from '@reduxjs/toolkit'
import { API, replaceId, Routes } from 'API'
import { call, put, takeEvery } from 'redux-saga/effects'
import { getPersonDetailSuccess } from './slice'
import { GetDetailResponse } from './types'

function* workGetPersonDetail(action: PayloadAction<string>): Generator {
  const response = yield call(API.get, replaceId(Routes.PERSON_DETAIL, action.payload))
  yield put(getPersonDetailSuccess(response as GetDetailResponse))
}

function* personDetailSaga() {
  yield takeEvery('personDetail/getPersonDetail', workGetPersonDetail)
}

export default personDetailSaga
