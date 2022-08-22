import React, { CSSProperties, FC, ReactNode } from 'react'

interface Props extends CSSProperties {
  children: ReactNode
  row?: boolean
  jc?: CSSProperties['justifyContent']
  ai?: CSSProperties['alignItems']
}

const Flex: FC<Props> = ({ row = true, jc, ai, children, ...rest }: Props) => {
  const flexDirection = row ? 'row' : 'column'

  return (
    <div
      style={{
        display: 'flex',
        flexDirection,
        justifyContent: jc,
        alignItems: ai,
        ...rest,
      }}
    >
      {children}
    </div>
  )
}

export default Flex
