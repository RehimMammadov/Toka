"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { FaRegHeart } from 'react-icons/fa';
import { BsCart2 } from 'react-icons/bs';
import { apiUrl } from '../api/api';
import Link from 'next/link.js';
import axios from 'axios';
import { FaChevronDown } from 'react-icons/fa6';

export default function Navbar() {
  const [ logos, setLogos ] = React.useState<any[]>([]);
  const [ anchorEl, setAnchorEl ] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const fetchData = async () => {
    try {
      const response = await axios.post(apiUrl, {
        query:  `
                    query {
                        logos {
                            id, 
                            title
                        }
                    }
                `,
      });
      setLogos(response.data.data.logos);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <nav className="w-full p-10 pl-32 pr-32 flex justify-between items-center absolute top-0 left-0 bg-[#030811] z-10">
        {logos &&
          logos.map((logo) => (
            <h5 className="text-3xl font-extrabold text-white" key={logo.id}>
              {logo.title}
            </h5>
          ))}
        <ul className="flex justify-between gap-7 items-center mt-1">
          <Link className="flex items-center gap-2 text-white font-medium hover:text-[#36bb91] duration-300" href={'/nft'}>
            NFT <FaChevronDown className="hover:rotate-180 duration-300" />
          </Link>
          <Link className="flex items-center gap-2 text-white font-medium hover:text-[#36bb91] duration-300" href={'/crypto'}>
            Crypto <FaChevronDown className="hover:rotate-180 duration-300" />
          </Link>
          <Link className="flex items-center gap-2 text-white font-medium hover:text-[#36bb91] duration-300" href={'/shop'}>
            Shop <FaChevronDown className="hover:rotate-180 duration-300" />
          </Link>
          <Link className="flex items-center gap-2 text-white font-medium hover:text-[#36bb91] duration-300" href={'/contact'}>
            Contact Us <FaChevronDown className="hover:rotate-180 duration-300" />
          </Link>
          <Link className="flex items-center gap-2 text-white font-medium hover:text-[#36bb91] duration-300" href={'/about'}>
            About Us <FaChevronDown className="hover:rotate-180 duration-300" />
          </Link>
          <div className="flex justify-between gap-7 items-center">
            <>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Typography sx={{ minWidth: 50 }}>
                  <Link href={'/favourites'}>
                    <FaRegHeart className="w-5 h-5 fill-white hover:fill-[#36bb91] duration-300" />
                  </Link>
                </Typography>
                <Typography sx={{ minWidth: 30 }}>
                  <Link href={'/cart'}>
                    <BsCart2 className="w-6 h-6 fill-white hover:fill-[#36bb91] duration-300" />
                  </Link>
                </Typography>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32, fontSize: 14, fontFamily: 600, background: "#36bb91" }}>RM</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    bgcolor: '#1e1e1e',
                    borderRadius: "6px",
                    color: 'white',
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&::before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleClose}>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon style={{ color: "#fff" }}>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon style={{ color: "#fff" }}>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon style={{ color: "#fff" }}>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </>
          </div>
        </ul>
      </nav>
    </>
  );
}
