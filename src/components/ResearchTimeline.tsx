import React from 'react';
import { Timeline } from 'antd';
import styled from 'styled-components';

const ResearchTimeline = () => (
    <React.Fragment>
        <h3>Research Timeline 🕒</h3>
        <p>
            My foray into research took lots of exploration, self-inquiry about what I enjoy doing and why, and 
            {' '} a healthy mixture of failure along the way. 
            {' '} In fact, I never thought I'd be a researcher for a majority of my undergraduate career!
            {' '} This timeline is an effort to reflect on the progress I've made and to pay homage those who have
            {' '} influenced me and my research. 
        </p>
        <MyTimeline
            mode="left"
            items={[
                {
                    label: 'Now',
                    children: 
                        <React.Fragment>
                            I'm figuring out my research direction for the rest of my Ph.D.! Trying to situate myself across three different 
                            {' '} research fields is no easy task.
                        </React.Fragment>,
                },
                {
                    label: '2023',
                    children: 
                        <React.Fragment>
                            I returned to Microsoft Research to work with <a href="https://thomas-zimmermann.com/" target='_blank'>Thomas Zimmermann</a> on how we can use large language models
                            {' '} to replicate empirical software engineering research.
                        </React.Fragment>,
                },
                {
                    label: '2022',
                    children: 
                        <React.Fragment>
                            I began my Ph.D. at CMU working with <a href="https://www.cs.cmu.edu/~bam/" target="_blank">Brad Myers</a>. In an attempt to combine my diverse research experiences
                            {' '} in software engineering, HCI, and NLP, my first research project was a large-scale usability study of neural code
                            {' '} generation tools.
                        </React.Fragment>,
                },
                {
                    label: '2021',
                    children: 
                        <React.Fragment>
                            After 6 years, I graduated with a B.S. in Computer Science and Informatics. I was accepted to CMU but deferred due to COVID.
                            {' '} Instead, I did an undergraduate research internship at Microsoft Research with <a href="https://thomas-zimmermann.com/" target='_blank'>Thomas Zimmermann</a> 
                            {' '} and <a href="https://denaeford.me/" target="_blank">Denae Ford Robinson</a> to study skills in open-source communities, where I ran my first study and wrote my first paper! <br/><br/>

                            {' '} I then became a Predoctoral Young Investigator at the Allen Institute for AI working with <a href='https://rlebras.github.io/' target="_blank">Ronan Le Bras</a> 
                            {' '} and <a href="https://homes.cs.washington.edu/~yejin/" target="_blank">Yejin Choi</a>. I had the amazing opportunity to build the demo for <a href="https://delphi.allenai.org/" target="_blank">Delphi</a>, 
                            {' '} which became <a href="https://www.nytimes.com/2021/11/19/technology/can-a-machine-learn-morality.html" target="_blank">Internet famous</a>. 
                            {' '} I helped scale and rework the demo as we were receiving millions of page vists in a week. I also led a study with 
                            {' '} <a href="https://maartensap.com/" target="_blank">Maarten Sap</a> quantifying the alignment between diverse annotators and NLP
                            {' '} datasets and models. This study helped me work through some of my imposter syndrome in doing NLP research. <br/><br/>
                            
                            {' '} In my free time, I led a  study with <a href="https://faculty.washington.edu/ajko/" target='_blank'>Amy Ko</a> to study how 
                            {' '} developers make implementation design decisions. This was the first time I had led a study 
                            {' '} independently end-to-end, from the scoping, methodology development, data collection, and paper writing. I credit this success to the
                            {' '} skills I learned from my Microsoft Research mentors and of course, Amy, whose amazing mentorship pushed 
                            {' '} me to make scary research decisions on my own!
                        </React.Fragment>,
                },
                {
                    label: '2020',
                    children: 
                        <React.Fragment>
                            I was awarded the <a href="https://blog.allenai.org/2020-allen-ai-outstanding-engineer-scholarship-3724317dd12f" target="_blank">Allen Institute for AI's Outstanding Engineer Scholarship</a>. 
                            {' '} This included an internship with the Mosaic Team under the supervision of <a href="https://www.chandrab.page/" target="_blank">Chandra Bhagavatula</a> 
                            {' '} and <a href="https://homes.cs.washington.edu/~yejin/" target="_blank">Yejin Choi</a>. That summer, I built a research demo for (at the time) a
                            {' '} state-of-the art vision-language model. <br/><br/>
                            
                            In the fall, I worked with <a href="https://swabhs.com/" target='_blank'>Swabha Swayamdipta</a> to study how toxicity detection
                            {' '} models make classification decisions using interpretability methods. This was my first NLP research project; I learned the basics
                            {' '} of NLP research and working with language models.
                        </React.Fragment>
                },
                {
                    label: '2019',
                    children: 
                        <React.Fragment>
                            I started research in my 4th year. I first worked with <a href="https://spencersevilla.com/" target="_blank">Spencer Sevilla</a> and 
                            {' '} <a href="https://kurti.sh/" target="_blank">Kurtis Heimerl</a>. I built web applications to manage a remote,
                            {' '} community-based LTE network in Papua New Guinea and learned what CS research is.
                            {' '} I later focused on my interest in software engineering by working with <a href="https://faculty.washington.edu/ajko/" target="_blank">Amy Ko</a> 
                            {' '} to build HowToo, a platform to share programming strategies with novice developers and learned the basics of HCI research.
                        </React.Fragment>,
                },
                {
                    label: '2015',
                    children: 
                        <React.Fragment>
                            I began my undergraduate at the University of Washington at the age of 16 through the early admission program,
                            {' '} <a href="https://robinsoncenter.uw.edu/programs/uw-academy/" target="_blank">UW Academy</a>. For the first
                            {' '} four years, I aspired to be a software architect but struggled to enter my major due to lower grades (thanks, undiagnosed ADHD).
                            {' '} I also withdrew for a quarter for my mental health. I ended up interning 6 times as a software engineer intern between
                            {' '} Microsoft, Apple, and Uber, and led 3 teams to build technology solutions for student organizations. 
                            {' '} While I really loved the process of building software, I found maintaining the same systems boring, making me question a career in software engineering.
                        </React.Fragment>
                }
            ]}
        />
    </React.Fragment>
);

const MyTimeline = styled(Timeline)`
    :where(.css-dev-only-do-not-override-17seli4).ant-timeline.ant-timeline-label .ant-timeline-item-label {
        width: 16px;
        font-style: italic;
    }

    :where(.css-dev-only-do-not-override-17seli4).ant-timeline.ant-timeline-label .ant-timeline-item-tail, :where(.css-dev-only-do-not-override-17seli4).ant-timeline.ant-timeline-label .ant-timeline-item-head {
        inset-inline-start: 48px;
    }

    :where(.css-dev-only-do-not-override-17seli4).ant-timeline.ant-timeline-label .ant-timeline-item-left .ant-timeline-item-content {
        inset-inline-start: 48px;
        width: calc(100% - 72px);
    }

    :where(.css-dev-only-do-not-override-17seli4).ant-timeline .ant-timeline-item.ant-timeline-item-last {
        padding-bottom: 0;
    }
`

export default ResearchTimeline;