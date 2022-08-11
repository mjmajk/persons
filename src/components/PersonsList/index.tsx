import { PersonalDetailModal } from 'components/PersonalDetailModal'
import PersonPreview from 'components/PersonPreview'
import { LIMIT, usePersonsList } from 'hooks/usePersonsList'
import React, { Fragment, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

export const PersonsList = () => {
  const { data, fetchNextPage, hasNextPage, refetch } = usePersonsList()
  const [activeUserId, setActiveUserId] = useState<string | null>(null)

  const itemsLength = data ? data.pages.length * LIMIT : 0

  return (
    <>
      <InfiniteScroll
        height={'70vh'}
        dataLength={itemsLength} //This is important field to render the next data
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
        refreshFunction={() => null}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
      >
        {data?.pages.map((page) => (
          <Fragment key={page.additional_data.pagination.start}>
            {page.data.map((person) => (
              <PersonPreview
                key={person.id}
                person={person}
                onClick={() => setActiveUserId(person.id)}
              />
            ))}
          </Fragment>
        ))}
      </InfiniteScroll>
      {activeUserId && (
        <PersonalDetailModal id={activeUserId} onClose={() => setActiveUserId(null)} />
      )}
    </>
  )
}
