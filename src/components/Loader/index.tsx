import React from 'react'
import PuffLoader from 'react-spinners/PuffLoader'

interface Props {
  size: number
}

const Loader = ({ size }: Props) => {
  return <PuffLoader size={size} />
}

export default Loader
