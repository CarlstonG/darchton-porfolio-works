import React, {useState} from 'react'
import Video from '../../../images/banner.png'
import {HeroContainer, HeroBg, VideoBg, HeroContent,
    HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight
} from './HeroSectionElements'  
import {Button} from '../../Button'

const HeroBanner = () => {
    const [hover, setHover] = useState(false)


    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
             <HeroBg>
                 <VideoBg src={Video}></VideoBg>
             </HeroBg>
             <HeroContent>
                 <HeroH1>
                     Professional Virtual Solutions Made Easy
                 </HeroH1>
                 <HeroP>
                     We Offer Expert Technical Virtual Solutions For your Business Needs...
                 </HeroP>
                 <HeroBtnWrapper>
                     <Button to="/signin" onMouseEnter={onHover}>Get Started{hover ? <ArrowForward />: <ArrowRight/>}</Button>
                 </HeroBtnWrapper>
             </HeroContent>
        </HeroContainer>
     )
}

export default HeroBanner;

