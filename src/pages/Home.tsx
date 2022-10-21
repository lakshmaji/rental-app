import React, { FC } from 'react'
import Lorem from '../components/lorem/Lorem'
import Navbar from '../components/navbar/Navbar'

interface Props {

}

const Home: FC<Props> = () => {
  return (
    <div>
        <header>
            <div className="container">
                <Navbar />

            </div>

        </header>
        <div>

            {Array.from({length:100}).map((_, i) => <Lorem key={i} />)}
        </div>
    </div>
  )
}

export default Home