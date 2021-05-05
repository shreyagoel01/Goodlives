import React, {useState} from 'react'
import Video from '../../video/videos.mp4'
import {MainContainer,MainBg, VideoBg, MainContent, MainH1, MainBtnWrapper, MainP, ArrowForward, ArrowRight} from './MainElements'
import {Button} from '../ButtonElements'
const MainSection = () => {
   const [hover, setHover] = useState(false)
   const onHover =() => {
       setHover(!hover)
   }


    return (
      <MainContainer>
          <MainBg>
              <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
          </MainBg>
          <MainContent>
              <MainH1>GoodLives</MainH1>
              <MainP>
              We know exactly how it feels to fight your battles alone! We’ve been there too.
              We will map you to the Right Therapist. Talk to someone who understands your Mental Health status!
              Gift a Goodness package to let a friend in need know you care for them and you are there for them.
              Help them get started now!
                  </MainP>
                  <MainBtnWrapper>
                      <Button to='giftnow' onMouseEnter={onHover} onMouseLeave={onHover}
                      primary="true"
                      dark= "true">
                          Gift Now {hover ? <ArrowForward /> : <ArrowRight />}
                          </Button>
                      </MainBtnWrapper>
              </MainContent>
     </MainContainer>
    )
}

export default MainSection
