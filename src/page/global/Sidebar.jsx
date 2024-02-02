import { Box, useTheme, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { tokens } from '../../themes/themes';

import { Link, NavLink } from 'react-router-dom';
import { sideMenuLinks } from '../../utils/sideMenuLinks';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleItemClick = (e) => {
    setSelected(title);
  };

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[200],
      }}
      onClick={handleItemClick}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to}  selected ={selected}/>
    </MenuItem>
  );
};

const SidebarPage = ({ handleDirectionSet, direction, isCollapsed, setIsCollapsed }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode);

  const [selected, setSelected] = useState("Dashboard");

  return (
    <>
      <Box borderRadius="3px" height='100%' style={{ border: "none", color: colors.primary[100] ,minHeight:"100vh"}}>
        <Sidebar collapsed={isCollapsed} transitionDuration={1000}
          rootStyles={{
            border: 'none',
            minHeight:"100vh",
            background:
              'linear-gradient(180deg, rgba(166,240,255,1) 0%, rgba(220,250,255,1) 49%, rgba(230,252,255,1) 100%)',
          }}
          image="https://bootstrapsale.com/projects/super-admin/resources/img/bg/2.jpg"
          styles={{ backdropFilter: 'blur(10px)', }}
        >
          <Menu iconShape="circle" >
            {/* LOGO AND MENU ICON */}
            <MenuItem
              // icon={isCollapsed ? <MenuOutlinedIcon /> : "ADMINPANEL"}
              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
                '&:hover': {
                  cursor: 'default',
                  backgroundColor: 'red', // Remove background color on hover
                },
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                  className="boxtest"
                >
                  <Typography variant="h3" color={colors.grey[100]} >
                    ADMIN PANEL
                  </Typography>
                </Box>
              )}
            </MenuItem>
            {!isCollapsed && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={`https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png`}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    Ed Roh
                  </Typography>
                  <Typography variant="h5" color={colors.primary[200]}>
                    VP Fancy Admin
                  </Typography>
                </Box>
              </Box>
            )}
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              {
                sideMenuLinks.map((item) => (
                  <NavLink to={item.url} style={{ textDecoration: "none", color: "inherit", active:"Home" }} selected={selected} key={item.title}>
                    <Item
                      title={item.title}
                      icon={item.icon}
                      selected={selected}
                      setSelected={setSelected}
                    />
                  </NavLink>
                ))
              }
              
            </Box>
            {!isCollapsed && (
              <Box mb="25px">
                <Box textAlign="center">
                  <IconButton onClick={() => handleDirectionSet()}>
                    <Typography variant="h5" color={colors.primary[200]}>
                      {direction === "rtl" ? "LTR" : "RTL"}
                    </Typography>
                  </IconButton>
                </Box>
              </Box>
            )}
          </Menu>
        </Sidebar>
      </Box>
    </>
  )
}

export default SidebarPage;