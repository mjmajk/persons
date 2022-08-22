import Flex from 'components/atoms/Flex'
import Loader from 'components/atoms/Loader'
import { LIMIT, usePersonSearch } from 'hooks/usePersonSearch'
import { Fragment } from 'react'
import PersonPreview from '../PersonPreview'
import PersonsInfiniteLoad from '../PersonsInfiniteLoad'

const PeopleSearch = () => {
  const { data, fetchNextPage, hasNextPage } = usePersonSearch()
  const itemsLength = data ? data.pages?.length * LIMIT : 0

  if (!data) {
    return (
      <Flex jc="center">
        <Loader size={100} />
      </Flex>
    )
  }

  return (
    <div>
      <PersonsInfiniteLoad
        length={itemsLength}
        fetchNext={() => fetchNextPage()}
        hasMore={!!hasNextPage}
      >
        {data?.pages.map((page) => (
          <Fragment key={page.additional_data.pagination.start}>
            {page.data.items.map((result) => (
              <PersonPreview key={result.item.id} person={result.item} />
            ))}
          </Fragment>
        ))}
      </PersonsInfiniteLoad>
    </div>
  )
}

export default PeopleSearch
