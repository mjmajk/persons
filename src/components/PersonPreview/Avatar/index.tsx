import React from 'react'
import styled from 'styled-components'
import { colors } from 'theme'

export enum AvatarSize {
  Small = '2rem',
  Medium = '3rem',
  Large = '6rem',
}

interface Props {
  imageSrc?: string
  name: string
  size?: AvatarSize
}

const Container = styled.div<{ size: AvatarSize }>`
  background: ${colors.lightBlue};
  color: ${colors.darkBlue};
  width: ${({ size }) => size};
  width: ${({ size }) => size};
  border-radius: ${({ size }) => size};
  text-align: center;
  line-height: ${({ size }) => size};
`

const Avatar = ({ name, size = AvatarSize.Small }: Props) => {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')

  return <Container size={size}>{initials}</Container>
}

export default Avatar
