import React, { useEffect } from 'react'

type Props = {}

const CatImage: React.FC<Props> = () => {
  console.log('render ねこねこねこねこ')

  useEffect(() => {
    console.log('effect ねこねこねこねこ')

    return () => {
      console.log('unmount さよなら ねこねこねこねこ')
    }
  })
  return (
    <div>
      <img src="./four-cute-cats-20650677.jpeg" alt="cat" />
    </div>
  )
}

export default CatImage
