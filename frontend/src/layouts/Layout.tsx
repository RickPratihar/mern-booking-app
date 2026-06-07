import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import SearchBar from "../components/SearchBar"

interface props{
  children: React.ReactNode
}

const Layout = ({children}: props) => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      <Header/>
      <Hero/>
      <div className="container mx-auto px-4 md:px-8">
        <SearchBar/>
      </div>
      <div className="container mx-auto py-10 px-4 md:px-8 flex-1">{children}</div>
      <Footer/>
    </div>
  )
}

export default Layout