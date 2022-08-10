import Header from "../../components/header/Header"
import AccountMain from "../../components/accountMain/AccountMain"
import AccountContent from "../../components/accountContent/AccountContent"
import "./account.css"

export default function Accounts() {
  return (
    <div className="accounts">
      <Header/>
      <AccountMain/>
      <AccountContent/>
    </div>
  )
}
