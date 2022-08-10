import "./accountMain.css"
import placeHolderPfp from "../../img/pfp.jpg"


export default function AccountMain() {
  return (
    <div className="accountMain">
      <div className="aMImg">
        <img src={placeHolderPfp} alt="" />
      </div>
      <div className="aMAbout">
        <div className="aMActions">
          <h3>@jambo</h3>
          <div className="aMActionsBtns">
            <button>Message</button>
            <button>Follow</button>
          </div>
        </div>
        <div className="aMStats">
          <span><strong>149</strong> posts</span>
          <span><strong>46</strong> followers</span>
          <span><strong>19</strong> following</span>
        </div>
        <div className="aMBlurb">
          <span>Prince Vill</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero assumenda libero doloribus amet minima neque placeat suscipit, repellat dignissimos ducimus atque fugit, beatae officiis! Sapiente unde ut deserunt ex similique.
          </p>
        </div>
      </div>
    </div>
  )
}
