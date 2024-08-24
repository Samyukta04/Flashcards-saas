import {AppBar, Container, Toolbar, Typography, Button} from '@mui/material'

export default function SignUpPage(){
  return <Container maxwidth = "sm">
    <AppBar Position = "Static" sx = {{backgroundColor : "#3f51b5"}}
       <Toolbar>
         <Typography variant = 'h6' sx = {{
         flexGrow: 1
       }}>
       Flashcard SaaS 
         </Typography>
         <Button color = "inherit">
         <Link href = "/sign_in" passHref>
         login
         </Link>
         </Butoon>
         <Button color = "inherit">
         <Link href = "/sign-up" passHref>
         Sign up
         </Link>
         </Butoon>
         </Toolbar> 
         </AppBar>

        <Box
         display = "flex"
         flexDirection = "column"
           alignItems = "center"
             justifyContent = "center">
               <Typography variant = 'h4'>
               Sign in 
               </Typography>
               <SignIn />
         </Box>
    </Container  
}
