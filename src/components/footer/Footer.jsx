import React from 'react'
import { Grid } from '@mui/material'
import { Button, ButtonGroup, AppBar, Toolbar } from '@mui/material';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <div>
      <Grid className='bg-white text-black text-center wt-10'
      container 
      sx={{bgcolor: "#30D5C8", color: "black" ,py: "3"}}>

        <Grid item xs={12} sx={6} md={3}> 
            <Typography className='pb-6 pt-2' varient='h6'>
                Company
            </Typography>
    
            <div>
              <Button className='pb-5' variant='h6' gutterBottom> About</Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6' gutterBottom> Blog </Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6' gutterBottom> Press </Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6' gutterBottom> Jobs </Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6' gutterBottom> Partners </Button>
            </div>
        </Grid>

        <Grid item xs={12} sx={6} md={3}> 
            <Typography className='pb-6 pt-2' varient='h6'>
               Solutions 
            </Typography>
            <div>
              <Button className='pb-5' variant='h6' gutterBottom> Marketing</Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6' gutterBottom> Analytics </Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6' gutterBottom> Commerce </Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6' gutterBottom> Insights </Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6' gutterBottom> Support </Button>
            </div>
        </Grid>

        <Grid item xs={12} sx={6} md={3}> 
            <Typography className='pb-6 pt-2' varient='h6'>
               Documentation 
            </Typography>
            <div>
              <Button className='pb-5' variant='h6' gutterBottom> Guides </Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6' gutterBottom> API Status </Button>
            </div>
            
        </Grid>

        <Grid item xs={12} sx={6} md={3}> 
            <Typography className='pb-6 pt-2' varient='h6'>
                Legal
            </Typography>
            <div>
              <Button className='pb-5' variant='h6' gutterBottom> Claim </Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6' gutterBottom> Privacy </Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6' gutterBottom> 
              {/* {" "} */}
              Terms </Button>
            </div>
            
        </Grid>

        <Grid className='pt-10' item xs={12}>
          <Typography variant='body2' component='p' align='center'>
            &copy; 2023My Company. All rights reserved.
          </Typography>
          <Typography variant='body2' component='p' align='center'>
            Made By Yours Truely.
          </Typography>
          <Typography variant='body2' component='p' align='center'>
            Icon made by{' '}
            <Link href='https://www.freeepik.com' color='inherit' underline='always'>
              Freepik
            </Link>
            <Link href='https://www.flaticon.com/' color='inherit' underline='always'>
              www.flaticon.com
            </Link>
          </Typography>

        </Grid>
      </Grid>
     
    </div>
  )
}

export default Footer
