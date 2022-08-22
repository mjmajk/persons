import { Button } from 'components/atoms/Button'
import { ReactNode, useRef } from 'react'
import { useModalStore } from 'store/modal'
import { useOutsideClick } from 'use-outside-click'
import { CloseButton, Footer, Header, ModalBody, Overlay } from './styled'

interface Props {
  children: ReactNode
  title: string
}

const Modal = ({ children, title }: Props) => {
  const bodyRef = useRef(null)
  const closeModal = useModalStore((state) => state.closeModal)

  useOutsideClick({ node: bodyRef, onOutsideClick: closeModal, isOpen: true })

  return (
    <Overlay>
      <ModalBody ref={bodyRef}>
        <Header>
          <span>{title}</span>
          <CloseButton onClick={closeModal} />
        </Header>
        {children}
        <Footer>
          <Button onClick={closeModal}>Back</Button>
        </Footer>
      </ModalBody>
    </Overlay>
  )
}

export default Modal
