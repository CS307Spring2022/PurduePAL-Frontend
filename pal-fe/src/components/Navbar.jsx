import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TagRoundedIcon from "@mui/icons-material/TagRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { Link, useLocation } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';

export const Navbar = () => {
  const pathname = useLocation();
  const [value, setValue] = useState(pathname.pathname);

  return (
    <Box sx={{ zIndex: 1, pb: 7 }}>
      <CssBaseline />

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Home"
            to={"/home"}
            value={"/home"}
            component={Link}
            icon={<HomeRoundedIcon />}
          />
          <BottomNavigationAction
            label="Explore"
            to={"/explore"}
            value={"/explore"}
            component={Link}
            icon={<TagRoundedIcon />}
          />
          <BottomNavigationAction
            label="Notifcations"
            to={"/notifications"}
            value={"/notifications"}
            component={Link}
            icon={<NotificationsNoneRoundedIcon />}
          />
          <BottomNavigationAction
            label="Profile"
            to={"/profile"}
            value={"/profile"}
            component={Link}
            icon={<AccountCircleRoundedIcon />}
          />
          <BottomNavigationAction
            label="Settings"
            to={"/settings"}
            value={"/settings"}
            component={Link}
            icon={<SettingsIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
