import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Notice from "./components/Notice/Notice"
import RequestLink from "./components/RequestLink/RequestLink"
import "./App.css"
const App = () => {
  return (
    <div className="home">
      <Navbar />
      <Notice />
      <RequestLink/>
      <Footer/>
    </div>
  )
}

export default App