import React, { FC } from 'react'

const Input: FC<any> = ({ subtext, value: input, setter }) => {
  return (
    <div className="input-field">
      <label htmlFor={`input-${subtext}`}>{subtext}</label>
      <input
        id={`input-${subtext}`}
        name={subtext}
        value={input[subtext]}
        onChange={(e) => {
          const name = e.target.name
          const value = e.target.value
          setter((values: any) => ({ ...values, [name]: value }))
        }}
      />
    </div>
  )
}

export default Input
