import { getEnv } from 'utils/get-env'

const API_TOKEN = getEnv('VITE_API_TOKEN')
const BASE_URL = getEnv('VITE_BASE_URL')

const getParamsAsString = (params: Params) => {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')
}

type Params = Record<string, string | number>

const generateUrl = (path: string, params: Params = {}) => {
  const paramsAsString = getParamsAsString({ ...params, api_token: API_TOKEN })

  return `${BASE_URL}${path}?${paramsAsString}`
}

export class API {
  static get = (path: string, params: Params = {}) =>
    fetch(generateUrl(path, params)).then((res) => res.json())

  static delete = (url: string) =>
    fetch(generateUrl(url), { method: 'delete' }).then((res) => res.json())

  static post(url: string, body: string) {
    return fetch(generateUrl(url), {
      body,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json())
  }

  static postFormData(url: string, data: FormData) {
    return fetch(generateUrl(url), {
      body: data,
      method: 'post',
    }).then((res) => res.json())
  }
}

export const replaceId = (route: Routes, id: string) => route.replace(':id', id)

export enum Routes {
  PERSONS_LIST = '/persons',
  PERSON_DETAIL = '/persons/:id',
  DELETE_PERSON = '/persons/:id',
  ADD_PERSON = '/persons',
  ADD_PERSON_PICTURE = '/persons/:id/picture',
  PERSONS_SEARCH = '/persons/search',
  ORGANIZATIONS = '/organizations',
}
