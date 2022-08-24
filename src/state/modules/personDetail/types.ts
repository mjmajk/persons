export interface PersonDetailState {
  personsDetail: Person | null
  isLoading: boolean
  error: null | string
}

export interface LabeledRecord {
  label: string
  primary: boolean
  value: string
}

interface Picture {
  pictures: {
    128: string
    512: string
  }
}

export interface Person {
  id: string
  company_id: string
  email: Array<LabeledRecord>
  phone: Array<LabeledRecord>
  primary_email: string
  name: string
  org_name: string
  picture_id?: Picture
}

export interface GetDetailResponse {
  data: Person
}
