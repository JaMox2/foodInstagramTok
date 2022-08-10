import './accountContent.css'
import AccountPost from '../accountPost/AccountPost'

export default function AccountContent() {
  return (
    <div className='accountContent'>
      <div className="accountContentCtrls">
        <ul>
          <li><a href="#">Post</a></li>
          <li><a href="#">Tweets</a></li>
        </ul>
      </div>
      <div className="postContainer">
        <AccountPost/>
        <AccountPost/>
        <AccountPost/>
      </div>
    </div>
  )
}
