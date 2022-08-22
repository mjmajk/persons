import Avatar from 'components/atoms/Avatar'
import Flex from 'components/atoms/Flex'
import Loader from 'components/atoms/Loader'
import { useDeletePerson } from 'hooks/useDeletePerson'
import { FC, useCallback } from 'react'
import { Modal, useModalStore } from 'store/modal'
import { spacing } from 'theme'
import { Person } from 'types'
import { CompanyInfo } from './CompanyInfo'
import { Container, DeleteIcon, Name } from './styled'

interface Props {
  person: Person
  onClick?: () => void
}

const PersonPreview: FC<Props> = ({ person }) => {
  const { mutate, isLoading: isDeleting, data } = useDeletePerson()

  const image = person?.picture_id?.pictures?.[128]
  const setModal = useModalStore((state) => state.setModal)

  const openDetailModal = useCallback(() => {
    setModal({
      id: person.id,
      type: Modal.DETAIL,
    })
  }, [])

  if (data?.success) {
    return null
  }

  return (
    <Container onClick={openDetailModal}>
      <div>
        <Name>{person.name}</Name> <CompanyInfo name={person.org_name} />
      </div>
      <Flex gap={spacing.s4} ai="center">
        {isDeleting ? (
          <Loader />
        ) : (
          <DeleteIcon
            onClick={(ev) => {
              ev.stopPropagation()
              mutate(person.id)
            }}
          />
        )}
        <Avatar name={person.name} imageSrc={image} />
      </Flex>
    </Container>
  )
}

export default PersonPreview
