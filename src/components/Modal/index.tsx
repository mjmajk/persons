import React, { ReactNode, useRef } from 'react'
import styled from 'styled-components'
import { colors } from 'theme'
import { useOutsideClick } from 'use-outside-click'
import { Overlay, ModalBody, Header, Footer } from './styled'

interface Props {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title: string
}

const Modal = ({ isOpen, onClose, children, title }: Props) => {
  const bodyRef = useRef(null)
  useOutsideClick({ node: bodyRef, onOutsideClick: onClose, isOpen })
  if (!isOpen) {
    return null
  }
  return (
    <Overlay>
      <ModalBody ref={bodyRef}>
        <Header>{title}</Header>
        {children}
        <Footer>
          <button onClick={onClose}>Back</button>
        </Footer>
      </ModalBody>
    </Overlay>
  )
}

export default Modal
