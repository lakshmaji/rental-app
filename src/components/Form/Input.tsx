import React from 'react'
import { Control, Controller, FieldError, FieldPath, FieldValues } from 'react-hook-form'
import styles from './Input.module.scss'

interface Props<T extends FieldValues> {
  control: Control<T>
  name: FieldPath<T>
  title: string
}
const Input = <T extends FieldValues>({ control, name, title }: Props<T>): JSX.Element => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value }, formState: { isDirty, errors } }) => (
        <div className={styles.container}>
          <label htmlFor={`input-${title}`}>{title}</label>

          <input
            id={`input-${title}`}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={title}
          />
          {isDirty && (errors[name] as FieldError)?.message !== 'undefined' && (
            <span>{(errors[name] as FieldError)?.message}</span>
          )}
        </div>
      )}
      name={name}
    />
  )
}

export default Input
