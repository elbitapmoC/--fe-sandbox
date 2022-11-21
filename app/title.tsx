import React from 'react'

const Title = ({ text }: { text: string }) => {
  return (
    <p className='max-w-md heading'>{text}</p>
  )
}

export default Title