import { Button } from 'components/atoms/Button'
import { Modal, useModalStore } from 'store/modal'

export const NewPersonButton = () => {
  const setModal = useModalStore((state) => state.setModal)

  return (
    <Button
      onClick={() => {
        setModal({
          type: Modal.NEW_PERSON,
        })
      }}
    >
      Add new Person
    </Button>
  )
}
