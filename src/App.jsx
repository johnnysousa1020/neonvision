import { useState } from 'react'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Filters from './components/Filters'
import imagens from './data/images'
import Modal from './components/Modal'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import FutureTech from './components/FutureTech'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Todas")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredimagens = imagens.filter((img) => selectedCategory === "Todas" ? true : img.category === selectedCategory)
  .filter((img) => img.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
      <>
       <Navbar searchTerm={searchTerm}
       setSearchTerm={setSearchTerm}/>
       <Hero />
       {searchTerm === "" && (
        <>
        <About />
        <Stats />
        <FutureTech />
        </>
       )}
       <Filters 
       selectedCategory={selectedCategory}
       setSelectedCategory={setSelectedCategory}/>
       <Gallery imagens={filteredimagens} 
       setSelectedImage={setSelectedImage}/>
       <Modal image={selectedImage}
       onClose={() => setSelectedImage(null)}/>
       <Footer />
      </>
  )
}

export default App
