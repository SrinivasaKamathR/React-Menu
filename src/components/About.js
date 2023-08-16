import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";
const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>This is React JS Learning Project</p>
      {/* <Outlet /> */}
      <Profile name={"Srinivas"} />
      <ProfileClass name="Akshay" />
    </div>
  );
};

export default About;
