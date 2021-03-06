import React from 'react'
import Box from '@mui/material/Box';
import SiderLayout from '../Sidebar'
import { DrawerHeader } from '../../../components/Drawer/DrawerEngine'
import './styles.css'

const LayoutInternal = ({sectionTitle,children}) => {
    return(
        <Box sx={{ display:'flex'}}>
            <SiderLayout />
            <Box component="main" sx={{ flexGrow:1, px:3 }}>
                <DrawerHeader />
                <div className='headerTitle'>
                    <h1>{sectionTitle}</h1>
                </div>
                <div style={{margin:"24px 16px 0px"}}>
                    <div className='content-hero'
                        style={{
                            padding: 24,
                            minHeight: 400
                        }}
                    >
                        {children}
                    </div>
                </div>
                <footer>
                 ©2022 by Huastechnology Inc. All rights reserved.
                </footer>
            </Box>
        </Box>
    )
}

export default LayoutInternal