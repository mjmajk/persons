import { useRef } from 'react'
import { AvatarSize, Container, IconContainer, UploadIcon, UserPlaceholder } from './styled'
interface Props {
  imageSrc?: string | null
  name?: string
  size?: AvatarSize
  onNewImageSelected?: (file?: File | null) => void
  displayChangeIcon?: boolean
  displayUserPlaceHolder?: boolean
}

const Avatar = ({
  name,
  size = AvatarSize.Small,
  imageSrc,
  onNewImageSelected,
  displayChangeIcon = false,
  displayUserPlaceHolder = false,
}: Props) => {
  const fileRef = useRef<HTMLInputElement>(null)

  const initials = name
    ? name
        .split(' ')
        .map((part) => part[0].toUpperCase())
        .join('')
    : null

  return (
    <Container size={size} imageSrc={imageSrc}>
      {!imageSrc && !displayUserPlaceHolder && initials}
      {displayChangeIcon && (
        <>
          <IconContainer onClick={() => fileRef?.current?.click()}>
            <UploadIcon />
          </IconContainer>
          <input
            onChange={(ev) => onNewImageSelected?.(ev.target?.files?.[0])}
            ref={fileRef}
            type="file"
            style={{ display: 'none' }}
          />
        </>
      )}
      {displayUserPlaceHolder && !imageSrc && <UserPlaceholder />}
    </Container>
  )
}

export default Avatar
