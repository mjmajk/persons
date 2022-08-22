import { Modal, useModalStore } from 'store/modal'
import { AddNewPersonModal } from '../AddNewPersonModal'
import { PersonalDetailModal } from '../PersonalDetailModal'

export const Modals = () => {
  const activeModal = useModalStore((state) => state.activeModal)

  if (activeModal?.type === Modal.DETAIL) {
    return <PersonalDetailModal id={activeModal.id} />
  }

  if (activeModal?.type === Modal.NEW_PERSON) {
    return <AddNewPersonModal />
  }
  return null
}
