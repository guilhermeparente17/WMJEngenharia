import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import IndexContainer from '../components/IndexContainer'
import Sobre from '../components/Sobre'
import Obras from '../components/Obras'
import Inversores from '../components/Inversores'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <IndexContainer />
            <Sobre  />
            <Obras />
            <Inversores />
        </div>
    )
}

export default Home
