import React from 'react'
import { Grid, Typography, TextField } from '@mui/material'
export default function CustomTextfeild() {
    return (
        <Grid display={'flex'} gap={'150px'} justifyContent={'space-between'} alignItems={'center'}><Typography >First Name</Typography><span>:</span>  <TextField
            label='First Name'
            name='firstname'
            // value={formData.firstname}
            // onChange={handleChange}
            margin='normal'
            style={{ width: '400px' }}
        /></Grid>
    )
}
