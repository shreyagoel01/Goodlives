import React from 'react';
import Icon1 from '../../Images/svg-6.svg';
import Icon2 from '../../Images/svg-7.svg';
import Icon3 from '../../Images/svg-8.svg';
import Icon4 from '../../Images/svg-9.svg';
import {ServicesWrapper, ServicesContainer, ServicesH1, ServicesH2,
ServicesIcon, ServicesP, ServicesCard} from './ServicesElement'
const Services = () => {
    return (
        <ServicesContainer id="servicesmore">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Stress Related</ServicesH2>
                    <ServicesP>Stress Management, Anxiety Management, Depression, Insomnia, PTSD, Trauma, Postpartum Depression, Loneliness & Identity Crisis</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Relationship</ServicesH2>
                    <ServicesP>Pre-Wedding Jitters, Couple counseling, Family Issues, Break-ups, Marriage Counseling, Building a Meaningful Relationship & Cheating in Relationship</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Self Improvement</ServicesH2>
                    <ServicesP>Anger Issues, Personal Growth, Discipline Issues, Confidence boosting, Inferiority Complex, Focus Retention & Work-Related Issues</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>Queer Counseling</ServicesH2>
                    <ServicesP>Queer Counseling, LGBTQIA+ Counseling, Sexual Orientation Issues, Discrimination & Acceptance Issues & Gender Identity Crisis</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
