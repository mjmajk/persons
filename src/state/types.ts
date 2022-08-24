import { PersonDetailState } from './modules/personDetail/types'
import { PersonState } from './modules/persons/types'

export interface RootState {
  persons: PersonState
  personDetail: PersonDetailState
}
