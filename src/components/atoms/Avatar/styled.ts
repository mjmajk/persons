import styled from 'styled-components'
import { Camera } from '@styled-icons/bootstrap/Camera'
import { User } from '@styled-icons/boxicons-regular/User'

export enum AvatarSize {
  Small = 3,
  Medium = 5,
  Large = 8,
}

export const Container = styled.div<{ size: AvatarSize; imageSrc?: string | null }>`
  background: ${({ theme }) => theme.colors.lightBlue};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ imageSrc }) => `url(${imageSrc})`}};
  color: ${({ theme }) => theme.colors.darkBlue};
  width: ${({ size }) => size}rem;
  border-radius: ${({ size }) => size}rem;
  text-align: center;
  height: ${({ size }) => size}rem;
  font-size: ${({ size }) => size / 2}rem;
  line-height: ${({ size }) => size}rem;
  position: relative;
`

export const UploadIcon = styled(Camera)`
  height: 1.5rem;
`

export const IconContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.transparentBlack};
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  cursor: pointer;
`
export const UserPlaceholder = styled(User)`
  height: 70%;
`
