import Image from "next/image"
import getStripe from "@/utils/get-stripe"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Head from "next/head"
import { AppBar, Button, Toolbar, Typography, Container, Box, Grid } from "@mui/material"


export default function Home() {
  return (
    <Container maxwidth='100v'>
      <Head>
        <title>Flashcard Saas</title>
        <meta name = "description" content="Create flashcard from your text"/>

      
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant ="h6" style={{flexGrow: 1}}>Flashcard Saas</Typography>
        <SignedOut>
          <Button color="inherit">LogIn</Button>
          <Button color="inherit">SignUp</Button>
        </SignedOut>
        <SignedIn>
          <UserButton/>
        </SignedIn>
        </Toolbar>
      </AppBar>
      <Box sx={{
        textAlign: "center",
        my: 4,
      }}>
        <Typography variant ="h2">Welcome to Flashcard Saas</Typography>
        <Typography variant ="h5">
          The easiest way to make flashcards from your text
        </Typography>
        <Button variant="contained" color="primary" sx={{mt: 2}}>Get Started</Button>
      </Box>
      <Box sx = {{my: 6}}>
        <Typography variant="h4" components="h2">
          Features
        </Typography>
        <Grid containe spacing= {4}>
          <Grid items xs={12} md={4}>
            <Typography variant="h6">
              Easy Text Inputs
            </Typography>
            <Typography>
              Simply input your text and let our software do the rest. Creating flashcards has never been easier.
            </Typography>
            <Typography variant="h6">
              Smart Flashcards
            </Typography>
            <Typography>
              {' '}
              Our AI intelligently breaks down your text into concise flashcards, perfect for studying.
              
            </Typography>
            <Typography variant="h6">
              Accessible Anywhere
            </Typography>

            <Typography>
            Access your flashcards from any device, ant any time. Study on the go with ease.
            </Typography>


          </Grid>
        </Grid>
        
      </Box>
      <Box sx={{my: 6, textAlign: 'center'}}>
      <Typography variant="h4" components="h2">Pricing</Typography>
        <Grid container spacing= {4}>
          <Grid items xs={12} md={4}>
            <Box           
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
              }}>
              <Typography variant="h6">
              Easy Text Inputs
            </Typography>
            <Typography>
              Simply input your text and let our software do the rest. Creating flashcards has never been easier.
            </Typography>

            </Box>
            
            <Typography variant="h6">
              Smart Flashcards
            </Typography>
            <Typography>
              {' '}
              Our AI intelligently breaks down your text into concise flashcards, perfect for studying.
              
            </Typography>
            <Typography variant="h6">
              Accessible Anywhere
            </Typography>

            <Typography>
            Access your flashcards from any device, ant any time. Study on the go with ease.
            </Typography>


          </Grid>
        </Grid>
      </Box>
      
    </Container>


  )
}
