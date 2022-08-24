import { PayloadAction } from '@reduxjs/toolkit'
import { API, replaceId, Routes } from 'API'
import { call, put, takeEvery } from 'redux-saga/effects'
import { updateListUserImage } from '../persons/slice'
import { addImageSuccess, getPersonDetailSuccess } from './slice'
import { AddPictureResponse, GetDetailResponse } from './types'

function* workGetPersonDetail(action: PayloadAction<string>): Generator {
  const response = yield call(API.get, replaceId(Routes.PERSON_DETAIL, action.payload))
  yield put(getPersonDetailSuccess(response as GetDetailResponse))
}

function* workAddImage(action: PayloadAction<{ id: string; file: File }>): Generator {
  const body = new FormData()
  body.append('file', action.payload.file)

  const id = action.payload.id

  const response = yield call(API.postFormData, replaceId(Routes.ADD_PERSON_PICTURE, id), body)

  const picture = (response as AddPictureResponse).data

  yield put(addImageSuccess(picture))
  yield put(updateListUserImage({ id, picture }))
}

function* personDetailSaga() {
  yield takeEvery('personDetail/getPersonDetail', workGetPersonDetail)
  yield takeEvery('personDetail/addImage', workAddImage)
}

export default personDetailSaga
