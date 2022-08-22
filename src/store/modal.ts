import create from 'zustand'

export enum Modal {
  DETAIL,
  NEW_PERSON,
}

export interface NewPersonModal {
  type: Modal.NEW_PERSON
}

export interface DetailModal {
  type: Modal.DETAIL
  id: string
}

type ActiveModal = NewPersonModal | DetailModal

interface State {
  activeModal: ActiveModal | null
  setModal: (params: ActiveModal | null) => void
  closeModal: () => void
}

export const useModalStore = create<State>((set) => ({
  activeModal: null,
  setModal: (activeModal: ActiveModal | null) => set(() => ({ activeModal })),
  closeModal: () => set(() => ({ activeModal: null })),
}))
