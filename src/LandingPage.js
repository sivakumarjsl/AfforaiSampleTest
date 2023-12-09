import {userAroundWorld, userAroundWorldAlt} from './constant';

function LandingPage() {
  return (
    <>
    <div>Loved by <span className="violetColourText">20,000+</span> users around the world</div>
    <img src={userAroundWorld} alt={userAroundWorldAlt} class="userImage" width="336" height="48"></img>
    </>
   
  );
}

export default LandingPage;
