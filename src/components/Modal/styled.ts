import styled from 'styled-components'
import { colors } from 'theme'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(10, 10, 10, 0.8);
`

export const ModalBody = styled.div`
  background: white;
  width: max-content;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 30rem;
`

export const Header = styled.div`
  padding: 1rem;
  font-weight: bold;
  background: ${colors.modalHeader};
`
export const Footer = styled.div`
  padding: 0.5rem;
  background: ${colors.modalHeader};
  display: flex;
  justify-content: flex-end;
`
