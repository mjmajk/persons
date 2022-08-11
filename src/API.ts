const BASE_URL = 'https://api.pipedrive.com/v1'
const API_TOKEN = '7317806cde17b2f3ec64eeb239de802ee54aa77a'

const getParamsAsString = (params: any) => {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')
}

export class API {
  static get(url: string, params: any = {}) {
    const paramsAsString = getParamsAsString({ ...params, api_token: API_TOKEN })

    const combinedUrl = `${BASE_URL}${url}?${paramsAsString}`

    return fetch(combinedUrl).then((res) => res.json())
  }
  static post(url: string, body: any = {}) {
    const combinedUrl = `${BASE_URL}${url}?${getParamsAsString({ api_token: API_TOKEN })}`

    return fetch(combinedUrl, {
      body: JSON.stringify(body),
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json())
  }
}
