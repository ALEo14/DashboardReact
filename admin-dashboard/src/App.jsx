import Sidebar from "./components/Sidebar"
import Main from './components/Main'
import PageContent from './components/Pagecontent'
import Footer from './components/Footer'
function App() {
 

  return (
    <>
    <div id="wrapper">
      <Sidebar/>
      <Main/>
     <PageContent/>
     <Footer/>
      </div>
    </>
  )
}

export default App
