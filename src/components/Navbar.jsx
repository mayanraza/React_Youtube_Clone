import React from 'react';
import { Stack } from '@mui/material';
import MUILink from '@mui/material/Link';
import { logo } from "../utils/constant"
import SearchBar from './SearchBar';

const Navbar = () => {
    return (
        <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: "#000", top: 0, justifyContent: 'space-between' }}>

            <MUILink component="a" href="/" style={{ display: "flex", alignItems: "center" }} >
                <img style={{ borderRadius: "6px" }} src={logo} alt="Home" height={45} />
            </MUILink >





            <SearchBar />

        </Stack>
    );
};

export default Navbar;