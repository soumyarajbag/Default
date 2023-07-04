import React from 'react'
import * as Signed from './Signed';
const Sign = () => {
    const [signIn, toggle] = React.useState(true);
    
    
      return(
          <Signed.Container>
              <Signed.SignUpContainer signinin={signIn}>
                  <Signed.Form>
                      <Signed.Title>Create Account</Signed.Title>
                      <Signed.Input type='text' placeholder='Name' />
                      <Signed.Input type='email' placeholder='Email' />
                      <Signed.Input type='password' placeholder='Password' />
                      <Signed.Button>Sign Up</Signed.Button>
                  </Signed.Form>
              </Signed.SignUpContainer>

              <Signed.SignInContainer signinin={signIn}>
                   <Signed.Form>
                       <Signed.Title>Sign in</Signed.Title>
                       <Signed.Input type='email' placeholder='Email' />
                       <Signed.Input type='password' placeholder='Password' />
                       <Signed.Anchor href='#'>Forgot your password?</Signed.Anchor>
                       <Signed.Button>Sigin In</Signed.Button>
                   </Signed.Form>
              </Signed.SignInContainer>

              <Signed.OverlayContainer signinin={signIn}>
                  <Signed.Overlay signinin={signIn}>

                  <Signed.LeftOverlayPanel signinin={signIn}>
                      <Signed.Title>Welcome Back!</Signed.Title>
                      <Signed.Paragraph>
                          To keep connected with us please login with your personal info
                      </Signed.Paragraph>
                      <Signed.GhostButton onClick={() => toggle(true)}>
                          Sign In
                      </Signed.GhostButton>
                      </Signed.LeftOverlayPanel>

                      <Signed.RightOverlayPanel signinin={signIn}>
                        <Signed.Title>Hello, Friend!</Signed.Title>
                        <Signed.Paragraph>
                            Enter Your personal details and start journey with us
                        </Signed.Paragraph>
                            <Signed.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </Signed.GhostButton> 
                      </Signed.RightOverlayPanel>
  
                  </Signed.Overlay>
              </Signed.OverlayContainer>

          </Signed.Container>
  )
}

export default Sign