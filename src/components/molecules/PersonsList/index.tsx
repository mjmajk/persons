import { Button } from 'components/atoms/Button'
import { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMorePersons, getPersons } from 'state/modules/persons/slice'
import { RootState } from 'state/types'
import PersonPreview from '../PersonPreview'

export const PersonsList = () => {
  const persons = useSelector((state: RootState) => state.persons.persons)
  const hasMore = useSelector((state: RootState) => state.persons.hasNext)
  const dispatch = useDispatch()

  console.log(persons)

  useEffect(() => {
    dispatch(getPersons())
  }, [])

  return (
    <Fragment>
      {persons.map((person) => (
        <PersonPreview key={person.id} person={person} />
      ))}
      {hasMore && <Button onClick={() => dispatch(fetchMorePersons())}>More</Button>}
    </Fragment>
  )
}
