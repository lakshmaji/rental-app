import React from 'react'
import Input from '../../../components/form-controls/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'
import styles from './Search.module.scss'

interface FormData {
  city: string
  date: string
  guests: string
}

const Search = (): JSX.Element => {
  const { handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      city: '',
      date: '',
      guests: '',
    },
  })

  const onSubmit = handleSubmit((data: FormData): void => {
    console.log('form values', data)
  })

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Input title="City" control={control} name="city" />
        <Input title="Dates" control={control} name="date" />
        <Input title="Guests" control={control} name="guests" />

        <button onClick={onSubmit}>
          <FontAwesomeIcon icon={faSearch} />
          Search
        </button>
      </div>
    </div>
  )
}

export default Search
