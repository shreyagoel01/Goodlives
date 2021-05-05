import React from 'react';
import Icon1 from '../../Images/svg-10.svg';
import Icon2 from '../../Images/svg-11.svg';
import Icon3 from '../../Images/svg-12.svg';
import Icon4 from '../../Images/svg-2.svg';
import {ServicesWrapper, ServicesContainer, ServicesH1, ServicesH2,
ServicesIcon, ServicesP, ServicesCard} from './ServicesElement'
const Services1 = () => {
    return (
        <ServicesContainer id="types">
            <ServicesH1>Know More</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>1 on 1 Therapy</ServicesH2>
                    <ServicesP>We offer therapy through Audio/Video calls & Emails. Get therapy session in the comfortable surroundings of your own home</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Multi Lingual</ServicesH2>
                    <ServicesP>We offer therapy in multiple languages. Our Therapists are expert in Hindi, English, Tamil, Assamese, Urdu</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Confidential</ServicesH2>
                    <ServicesP>We respect your privacy and promise not to share your data with anyone other than your health professional</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>Types of Therapy</ServicesH2>
                    <ServicesP>Different types of therapy available music, expressive arts, and talk-based to help you heal when you can’t express things in words</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services1
