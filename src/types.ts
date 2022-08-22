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

export interface Company {
  id: string
  name: string
}

export interface PaginationResponse<TData> {
  additional_data: {
    pagination: {
      limit: number
      more_items_in_collection: boolean
      start: number
      next_start: number
    }
  }
  data: TData
}

export enum Tags {
  PERSONS = 'persons',
  PERSONS_SEARCH = 'persons-search',
  ORGANIZATIONS_LIST = '/organizations',
}
