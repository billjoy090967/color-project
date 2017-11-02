import React from 'react'
import { toLower } from 'ramda'

const pageColor = color => ({
  height: '800px',
  color: 'white',
  backgroundColor: toLower(color)
})

const Show = props => {
  return (
    <div
      className={`avenir vh-100 tc ttu white pv4 f6 f1-l f3-m bg-${toLower(
        props.match.params.color
      )}`}
    >
      {props.match.params.color}
    </div>
  )
}

export default Show
