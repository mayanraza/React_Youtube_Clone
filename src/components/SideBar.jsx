import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { categories } from '../utils/constant';




function SideBar({ selectedCategory, setselectedCategory }) {
    return (
        <Stack direction="row" sx={{ overflowY: "auto", hieght: { sx: "auto", md: "95%" }, flexDirection: { md: "column" } }}>

            {categories.map((categories) => (
                <button className='category-btn' onClick={()=>setselectedCategory(categories.name)} style={{ background: categories.name === selectedCategory && "#FC1503", color: "white" }} key={categories.name}>
                    <span style={{ color: categories.icon === selectedCategory ? "white" : "red", marginRight: "15px" }}>{categories.icon}</span>
                    <span style={{ opacity: categories.name === selectedCategory ? "1" : "0.8" }}>{categories.name}</span>

                </button>

            ))}
        </Stack>
    );
}

export default SideBar;