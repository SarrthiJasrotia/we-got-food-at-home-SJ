import { IoMdTrophy } from "react-icons/io";
import { IoTrophyOutline } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import "./Profile.css";

function Profile() {
  return (
    <div>
      <h1>Name</h1>
      <div className="profile-top">
        <div className="profile-photo">Photo</div>
        <div className="profile-level container">
          <div className="profile-level-bar one"> </div>
          <div>
            {" "}
            <div className="profile-level-bar two"></div>
          </div>
        </div>
      </div>
      <p>Your points: 40</p>
      <p>Your collection</p>
      <div>
        Chicken Alfredo <IoMdTrophy /> <IoMdTrophy /> <IoMdTrophy />{" "}
        <IoMdTrophy /> <IoTrophyOutline /> <IoTrophyOutline />{" "}
        <IoTrophyOutline />
      </div>
      <div>
        Veggie Curry <IoMdTrophy /> <IoMdTrophy /> <IoMdTrophy /> <IoMdTrophy />{" "}
        <IoTrophyOutline /> <IoTrophyOutline /> <IoTrophyOutline />
      </div>

      <button className="profile-button">Ready to cook?</button>
    </div>
  );
}

export default Profile;