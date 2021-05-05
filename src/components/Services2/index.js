import React from 'react';
import Icon1 from '../../Images/tot.png';
import Icon2 from '../../Images/svg-14.png';
import Icon3 from '../../Images/svg-15.png';

import {ServicesWrapper, ServicesContainer, ServicesH1, ServicesH2,
ServicesIcon, ServicesP, ServicesCard} from './ServicesElement'
const Services2 = () => {
    return (
        <ServicesContainer id="types">
            <ServicesH1>Types of Therapists</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Psychologist</ServicesH2>
                    <ServicesP>They are professionals specializing in diagnosing and treating diseases of the brain, emotional disturbance, and behaviour problems. They can use various types of therapy as treatment that does not involve medication.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Psychiatrist</ServicesH2>
                    <ServicesP>Psychiatrists have a medical degree along with advanced qualifications from residency and a specialty in psychiatry. You must see a psychiatrist or other medical doctor to be treated with medication.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Counsellor</ServicesH2>
                    <ServicesP>A counsellor is a person who gives advice or counsel, specifically on personal problems or career related issues. They may not be able diagnose mental health problem, but they can help you with your problems based on their experience.</ServicesP>
                    </ServicesCard>
                    
                </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services2
