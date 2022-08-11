import Divider from 'components/Divider'
import Loader from 'components/Loader'
import Modal from 'components/Modal'
import Avatar, { AvatarSize } from 'components/PersonPreview/Avatar'
import { usePersonDetail } from 'hooks/usePersonDetail'
import React, { FC, useEffect } from 'react'
import { AdditionalInfo, Container, Label, Name, Phone, Value } from './styled'

interface Props {
  id: string
  onClose: () => void
}

export const PersonalDetailModal: FC<Props> = ({ id, onClose }) => {
  const { data, isLoading } = usePersonDetail(id)

  const user = data?.data

  return (
    <Modal title="Personal informations" isOpen={!!id} onClose={onClose}>
      <Container>
        {isLoading && <Loader size={100} />}
        {user && (
          <>
            <Avatar size={AvatarSize.Large} name="Anita Ruta" />
            <Name>{user.name}</Name>
            <Phone>{user.phone[0].value}</Phone>
            <Divider />
            <AdditionalInfo>
              <Label>Email</Label>
              <Value>{user.primary_email}</Value>
              <Label>Organization</Label>
              <Value>{user.company_id}</Value>
            </AdditionalInfo>
          </>
        )}
      </Container>
    </Modal>
  )
}
