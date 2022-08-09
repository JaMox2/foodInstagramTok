import "./home.css"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import Content from "../../components/content/Content"

export default function Home() {
  return (
    <div className="home">
      <Header/>
      <div className="homeMain">
        <Navbar/> 
        <div className="contentContainer">
          <Content/>
          <Content/>
          <Content/>
          <Content/>
          <Content/>
        </div>
      </div>
    </div>
  )
}
