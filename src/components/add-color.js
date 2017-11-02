import React from 'react'

const AddColor = ({ value, onChange, onSubmit }) => {
  return (
    <form
      className="flex"
      onSubmit={e => {
        e.preventDefault()
        onSubmit(value)
      }}
    >
      <input value={value} onChange={onChange} />
      <button>Add Color</button>
    </form>
  )
}

export default AddColor
