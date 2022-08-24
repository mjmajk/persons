export interface PersonState {
  persons: Person[]
  isLoading: boolean
  error: null | string
  hasNext: boolean
  nextPage: number
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

export interface GetPersonsResponse {
  additional_data: {
    pagination: {
      limit: number
      more_items_in_collection: boolean
      next_start: number
      start: number
    }
  }
  data: Person[]
}
