import React, { ReactNode } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

interface Props {
  length: number
  hasMore: boolean
  fetchNext: () => void
  children: ReactNode
}

const PersonsInfiniteLoad = ({ length, hasMore, children, fetchNext }: Props) => {
  return (
    <InfiniteScroll
      height={'calc(100vh - 10rem'}
      dataLength={length} //This is important field to render the next data
      next={() => fetchNext()}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      // below props only if you need pull down functionality
      refreshFunction={() => null}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
    >
      {children}
    </InfiniteScroll>
  )
}

export default PersonsInfiniteLoad
