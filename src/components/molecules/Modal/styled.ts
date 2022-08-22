import styled from 'styled-components'
import { spacing } from 'theme'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(10, 10, 10, 0.8);
  z-index: 4;
`

export const ModalBody = styled.div`
  background: white;
  width: max-content;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 30rem;
  max-height: 90vh;
  overflow-y: auto;
`

export const Header = styled.div`
  padding: ${spacing.s4};
  font-size: 1.4rem;
  font-weight: bold;
  background: ${({ theme }) => theme.colors.modalHeader};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Footer = styled.div`
  padding: ${spacing.s4};
  background: ${({ theme }) => theme.colors.modalHeader};
  display: flex;
  justify-content: flex-end;
`
export const CloseButton = styled(CloseOutline)`
  cursor: pointer;
  height: 2rem;
`
