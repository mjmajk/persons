import { Button } from 'components/atoms/Button'
import Flex from 'components/atoms/Flex'
import Input from 'components/atoms/Input'
import Loader from 'components/atoms/Loader'
import Modal from 'components/molecules/Modal'
import Avatar from 'components/atoms/Avatar'
import { AvatarSize } from 'components/atoms/Avatar/styled'
import { Form, Formik } from 'formik'
import { useAddPerson } from 'hooks/addPerson'
import { useOrganizationsList } from 'hooks/useOrganizationsList'
import { FC, useState } from 'react'
import { FormValues, initialValues, schema } from './schema'
import { Container, ErrorMessage, MissingOrganizationWarning } from './styled'
import Select from 'components/atoms/Select'

export const AddNewPersonModal: FC = () => {
  const { data: organizationsList } = useOrganizationsList()
  const { mutate: createNewPerson, isLoading } = useAddPerson()
  const [image, setImage] = useState<null | File | undefined>(null)

  const isOrganizationsEmpty = organizationsList && !organizationsList.data

  const hasError = false

  return (
    <Modal title="Add new person">
      <Container>
        <>
          <Flex jc="center">
            <Avatar
              displayUserPlaceHolder
              size={AvatarSize.Large}
              onNewImageSelected={setImage}
              imageSrc={image ? URL.createObjectURL(image) : null}
              displayChangeIcon
            />
          </Flex>
          {isOrganizationsEmpty && (
            <MissingOrganizationWarning>
              If you want add organization to user, you need to create one first!
            </MissingOrganizationWarning>
          )}
          <Formik<FormValues>
            initialValues={initialValues}
            onSubmit={(values) => createNewPerson({ values, image })}
            validateOnBlur
            validationSchema={schema}
          >
            {() => (
              <Form>
                <Input label="Name" name="name" />
                <Input label="Email" name="email" />
                <Input label="Phone" name="phone" />
                {organizationsList ? (
                  <Select
                    label="Organization"
                    name="org_id"
                    options={organizationsList.data?.map((item) => ({
                      value: item.id,
                      label: item.name,
                    }))}
                  />
                ) : (
                  <Loader />
                )}
                <Button loading={isLoading} type="submit">
                  submit
                </Button>
              </Form>
            )}
          </Formik>
          {hasError && (
            <ErrorMessage>We ware unable to create user, please try again later</ErrorMessage>
          )}
        </>
      </Container>
    </Modal>
  )
}
