import React from 'react';
import SectionCard from '../../components/Cards/sections';
import CircularCard from '../../components/Cards/circularCards';

import LandingPageImg from '../../assets/firstSection.jpg';
import classes from './landingPage.module.css';

function LandingPage() {
    return(
        <div className={classes.landingPage}>
            <SectionCard>
                <img className={classes.firstSection} src={LandingPageImg} alt="background"/>
            </SectionCard>
            <SectionCard>
                <div className={classes.sectionHeading}>
                    Shop by States
                </div>
                <div className={classes.secondSection}>
                <CircularCard>
                    <div className={classes.state}>Jammu&Kashmir</div>
                </CircularCard>
                <CircularCard>
                    <div className={classes.state}>Maharastra</div>
                </CircularCard>
                </div>
            </SectionCard>
        </div>
    )
}

export default LandingPage;