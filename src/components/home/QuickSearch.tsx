import React from 'react'
import Input from './Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const QuickSearch = (): JSX.Element => {
  const [input, setInput] = React.useState({
    CITY: 'Select your city',
    DATES: 'Select your dates',
    GUESTS: 'Add guests',
  })

  return (
    <div className="form-wrapper">
      <div className="form">
        <Input subtext="CITY" value={input} setter={setInput} />
        <Input subtext="DATES" value={input} setter={setInput} />
        <Input subtext="GUESTS" value={input} setter={setInput} />
        <button>
          <FontAwesomeIcon icon={faSearch} />
          Search
        </button>
      </div>
    </div>
  )
}

export default QuickSearch
