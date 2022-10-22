import React from 'react'
import Input from './Input'

const QuickSearch = () => {
  const [input, setInput] = React.useState({
    CITY: 'Select your city',
    DATES: 'Select your dates',
    GUESTS: 'Add guests'
  })

  return (
    <div className="form-wrapper">
      <div className="form">
        <Input subtext="CITY" value={input} setter={setInput} />
        <Input subtext="DATES" value={input} setter={setInput} />
        <Input subtext="GUESTS" value={input} setter={setInput} />
        <button>
          <i className="fa-solid fa-search"></i>
          Search
        </button>
      </div>
    </div>
  )
}

export default QuickSearch
