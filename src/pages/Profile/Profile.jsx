import { Grid, Button, CircularProgress, Typography } from "@mui/material";
import { lazy } from "react";
// import { ProfileDetails } from "./ProfileDetails";
import { useContext, useState, useEffect} from "react";
import { Navigate, useSearchParams } from "react-router-dom";

import GlobalState from "../../contexts/GlobalStates";

import "./loader.css"

const ProfileDetails = lazy(() => import("./ProfileDetails"));

const Profile = () => {
  const [isSignedIn] = useContext(GlobalState);
  const [profileLoaded,setProfileLoaded] = useState(false);
  const [isPrivate,setIsPrivate] = useState(false);
  const [searchParams] = useSearchParams();
  const [profileData, setProfileData] = useState([])



  useEffect(() => {
    async function getProfile() {
      const loggedEmail = localStorage.getItem("email");
      const loggedUser = localStorage.getItem("username");
      const profileUser = searchParams.get("user");

      console.log(profileUser);

      const userBody = {
        "loggedEmail": loggedEmail,
        "loggedUser": loggedUser,
        "profileUser": profileUser
      }

      const response = await fetch(`http://localhost:5000/getUser`,{
        method: "POST",
        body: JSON.stringify(userBody),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        // const message = `An error oc`;
        // window.alert(message);
        console.log(response)
        return;
      }

      const data = await response.json();
      console.log(data)

      if (data.msg === "Profile is Private!") {
        setIsPrivate(true);
        setProfileLoaded(true);
        return
      }

      setProfileLoaded(true)
      setIsPrivate(false);

      console.log(data)
      setProfileData(data)
    }

    getProfile()
  },[searchParams]);

  if (!isSignedIn) {
    return <Navigate to="/"/>;
  }
  

  return (
    <Grid sx={{overflowX: "hidden", backgroundColor: "black"}} ml={{xs:0, sm:"110px",md:"240px",lg:"240px"}} maxWidth="100vw" minHeight={"100vh"} container >
      <Grid justifyContent="center" display={!profileLoaded ? "flex" : "block"} sm={8} sx={{backgroundColor: "black"}} item>
        {profileLoaded ? (isPrivate ? <Typography component="h1" color="primary">Profile is Private!</Typography> :<ProfileDetails data={profileData}/>) : <CircularProgress sx={{marginTop: "40%", marginLeft: { xs: "0px", sm: "75px", md: "200px", lg: "200px" }}} />}
      </Grid>
      <Grid sm={4} item container justifyContent={"center"} alignItems={'center'}>
        <Button>Right Nav</Button>
      </Grid>
    </Grid>
  );
};

export default Profile;
