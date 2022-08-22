import Avatar from 'components/atoms/Avatar'
import { AvatarSize } from 'components/atoms/Avatar/styled'
import Divider from 'components/atoms/Divider'
import Loader from 'components/atoms/Loader'
import Modal from 'components/molecules/Modal'
import { useAddPersonPicture } from 'hooks/addPersonPicture'
import { usePersonDetail } from 'hooks/usePersonDetail'
import { FC } from 'react'
import { AdditionalInfo, Container, Label, Name, Phone, Value } from './styled'

interface Props {
  id: string
}

export const PersonalDetailModal: FC<Props> = ({ id }) => {
  const { data, isLoading } = usePersonDetail(id)

  const { mutate, isLoading: isUploadingPicture } = useAddPersonPicture()

  const user = data?.data

  const image = user?.picture_id?.pictures?.[512]

  const submit = async (file?: File | null) => {
    if (!file) {
      return
    }
    const body = new FormData()
    body.append('file', file)
    mutate({ id: id, body })
  }

  return (
    <Modal title="Personal informations">
      <Container>
        {isLoading && <Loader size={100} />}

        {user && (
          <>
            {isUploadingPicture ? (
              <Loader size={`${AvatarSize.Large}rem`} />
            ) : (
              <Avatar
                displayUserPlaceHolder
                onNewImageSelected={submit}
                size={AvatarSize.Large}
                name="Anita Ruta"
                imageSrc={image}
                displayChangeIcon
              />
            )}
            <Name>{user.name}</Name>
            <Phone>{user.phone[0].value}</Phone>
            <Divider />
            <AdditionalInfo>
              <Label>Email</Label>
              <Value>{user.primary_email}</Value>
              <Label>Organization</Label>
              <Value>{user.org_name || 'none'}</Value>
            </AdditionalInfo>
          </>
        )}
      </Container>
    </Modal>
  )
}
