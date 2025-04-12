import React from 'react';
import { Divider } from 'antd';
import News from './News';
import ResearchHighlights from './ResearchHighlights';

import meiSrc from "../img/mei.jpg";

const HomeContent = () => (
    <React.Fragment>
        <div>
            <p>
                I'm Jenny, a third year Ph.D. student at <a href="https://www.cmu.edu/" target="_blank" rel="noreferrer">
                Carnegie Mellon University</a> advised by <a href="http://www.cs.cmu.edu/~bam/" target="_blank" rel="noreferrer">Dr. Brad A. Myers</a>.
            </p>
            <p>
                I'm fortunate to be supported by the National Science Foundation as a <a href="https://www.nsfgrfp.org/" target="_blank">Graduate Research Fellow</a>. I'm even luckier to have been mentored by some 
                amazing researchers during my undergrad who inspired my current research: <a href="https://faculty.washington.edu/ajko/" target="_blank">Amy J. Ko</a> for software engineering and human-computer interaction, and 
                {' '} <a href="https://homes.cs.washington.edu/~yejin/" target="_blank">Yejin Choi</a> for natural language processing.
            </p>
            <p>
                I'm interested in research at the intersections of software engineering (SE), human-computer interaction (HCI), and artificial intelligence (AI).
                {' '} <b>I broadly study how to improve developer experience 
                (<a href="https://github.blog/enterprise-software/collaboration/developer-experience-what-is-it-and-why-should-you-care/" target="_blank">DevEx</a>) 
                through the use of AI:</b>
            </p>
            <ol>
                <li><b>Developer behavior:</b> How do developers write software? (SE + HCI)</li>
                <li><b>Human-AI interaction:</b> How do humans interact with AI? What do users need from AI? (HCI + AI)</li>
                <li><b>AI-supported software development</b>: How can AI approaches support software engineering tasks? (SE + AI)</li>
            </ol>
            <p>
                Have any questions or just want to chat? I'm always happy to meet new people—just reach out! Don't forget to say hi to my dog, {' '}
                <a href={meiSrc} target="_blank" rel="noreferrer">Mei 🐕</a>!
            </p>
            {/* News section */}
        </div>
        <Divider/>
        <News />
        <Divider/>
        <ResearchHighlights />
    </React.Fragment>
);

export default HomeContent;