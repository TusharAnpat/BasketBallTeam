import { AppBar, Box, Button } from '@mui/material'
import React from 'react'

const Navbar = (props) => {

    const formPage = () => {
        props.getPage({ pageValue: "formPage" })
    }

    const listPage = () => {
        props.getPage({ pageValue: "listPage" })
    }

    return (
        <div>
            <AppBar position="static">
                <Box sx={{ marginRight: '85px', justifyContent: 'center', flexGrow: 10, display: { xs: 'none', md: 'flex' } }}>
                    <Button onClick={formPage} sx={{ my: 2, color: 'white', display: 'block' }}> Compose Team </Button>
                    <Button onClick={listPage} sx={{ my: 2, color: 'white', display: 'block' }}> First Quarter </Button>
                </Box>

            </AppBar>
        </div>
    )
}

export default Navbar
