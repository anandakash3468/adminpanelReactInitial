import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { colorModeContext, tokens } from "../../themes/themes";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import React from "react";

const Topbar = ({ isCollapsed, setIsCollapsed, handleCollapse }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  console.log("colorscolors", colors);
  const colorMode = useContext(colorModeContext);
  return (
    <Box
      display="flex"
      className="topbar"
      justifyContent="space-between"
      p={2}
      backgroundColor={colors.primary[200]}
      sx={{ margin: "18px", }}
    >
      <Box display="flex" borderRadius="3px">
        <Box>
          <IconButton onClick={() => handleCollapse()}>
            <MenuOutlinedIcon />
          </IconButton>
        </Box>
        <Box
          display="flex"
          sx={{ ml: 3, flex: 1, backgroundColor: colors.primary[200] }}
        >
          <InputBase
            size="large"
            sx={{ ml: 3, flex: 1, backgroundColor: colors.primary[200] }}
            placeholder="Search"
          />
          <IconButton type="button" size="large">
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      <Box
        display="flex"
        backgroundColor={colors.primary[200]}
        borderRadius="3px"
        sx={{ mx: "3" }}
      >
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton type="button">
          <NotificationsOutlinedIcon color="red" />
        </IconButton>
        <IconButton type="button">
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton type="button">
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
