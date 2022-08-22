import Flex from 'components/atoms/Flex'
import Loader from 'components/atoms/Loader'

import { LIMIT, usePersonsList } from 'hooks/usePersonsList'
import { Fragment } from 'react'
import PersonPreview from '../PersonPreview'
import PersonsInfiniteLoad from '../PersonsInfiniteLoad'

export const PersonsList = () => {
  const { data, fetchNextPage, hasNextPage } = usePersonsList()
  const itemsLength = data ? data.pages?.length * LIMIT : 0

  if (!data) {
    return (
      <Flex jc="center">
        <Loader size={100} />
      </Flex>
    )
  }

  console.log(data.pages[data.pages.length - 1].data[0])

  return (
    <PersonsInfiniteLoad
      length={itemsLength}
      fetchNext={() => fetchNextPage()}
      hasMore={!!hasNextPage}
    >
      {data?.pages.map((page) => (
        <Fragment key={page.additional_data.pagination.start}>
          {page.data.map((person) => (
            <PersonPreview key={person.id} person={person} />
          ))}
        </Fragment>
      ))}
    </PersonsInfiniteLoad>
  )
}
