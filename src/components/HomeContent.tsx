import React from 'react';
import {Divider} from 'antd';
import News from './News';

import meiSrc from "../img/mei.jpg";

const HomeContent = () => (
    <React.Fragment>
        <div>
            <p>
                I'm Jenny, a second year Ph.D. student at <a href="https://www.cmu.edu/" target="_blank" rel="noreferrer">
                Carnegie Mellon University</a> advised by <a href="http://www.cs.cmu.edu/~bam/" target="_blank" rel="noreferrer">Dr. Brad A. Myers</a>.
            </p>
            <p>
                I'm broadly interested in research at the intersections of software engineering (SE), human-computer interaction (HCI), and natural language processing (NLP).
                {' '} <b>Currently, I'm studying methods to improve developers' interactions with code generation tools.</b>
            </p>
            <p>
                I'm fortunate to be supported by the National Science Foundation as a <a href="https://www.nsfgrfp.org/" target="_blank">Graduate Research Fellow</a>. I'm even luckier to have been mentored by some 
                amazing researchers during my undergrad who inspired my current research: <a href="https://faculty.washington.edu/ajko/" target="_blank">Amy J. Ko</a> for SE+HCI and 
                {' '} <a href="https://homes.cs.washington.edu/~yejin/" target="_blank">Yejin Choi</a> for NLP.
            </p>
            <p>
                Have any questions or just want to chat? I'm always happy to meet new people—just reach out! And don't forget to say hi to my dog, {' '}
                <a href={meiSrc} target="_blank" rel="noreferrer">Mei 🐕</a>!
            </p>
            {/* News section */}
        </div>
        <Divider/>
        <News />
    </React.Fragment>
);

export default HomeContent;