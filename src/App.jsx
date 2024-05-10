import './App.css'
import Header from './components/Header'
import Categoery from './components/Categoery'
import Cards from './components/Cards'
import Header2 from './components/Header2'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <Header/>
<Categoery/>
<Cards title="Top restaurant chains in Noida 1"/>
<Cards title="Restaurants with online food delivery in Noida 1"/>
<Cards title="Best Cuisines Near Me"/>
<Footer/>
 
    </>
  )
}

export default App
