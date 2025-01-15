import React from 'react';
import { Divider } from 'antd';
import { PhotoGrid } from './shared';
import Travel from './Travel';

import powerlifting1Src from "../img/powerlifting1.png";
import powerlifting2Src from "../img/powerlifting2.png";
import ResearchTimeline from './ResearchTimeline';

const AboutContent = () => (
    <React.Fragment>
        <h3>Bio </h3>
        <p>
            Jenny T. Liang is a Ph.D. student at Carnegie Mellon University and a NSF Graduate Research Fellow.
            {' '} She is broadly interested in studying how developers write code and building AI tools to support programming activities. 
            {' '} Currently, she is studying methods to improve developers' interactions with code generation tools.
            {' '} Her research has won distinguished paper awards at top-tier software engineering and natural language processing venues, such as ICSE and ACL.
        </p>
        <Divider />
        <h3>Academic Lineage </h3>
        <p>For my Ph.D., I am advised by <a href="https://www.cs.cmu.edu/~bam/" target="_blank">Brad A. Myers</a> (Ph.D. in Computer Science, University of Toronto).</p>
        <ol>
            <li>Brad was advised by <a href="https://ronbaecker.com/" target="_blank">Ronald Baecker</a> (Ph.D. in Computer Science, MIT) and <a href="https://www.billbuxton.com/" target="_blank">Bill Buxton</a> (four doctorates <i>Honoris Causa</i>).</li>
            <li>Ronald was advised by <a href="https://nap.nationalacademies.org/read/4779/chapter/21" target="_blank">Edward Glaser</a> (A.B. in Physics, Dartmouth College).</li>
        </ol>
        <p>For my undergraduate, I was primarily advised by <a href="https://faculty.washington.edu/ajko/" target='_blank'>Amy J. Ko</a> (Ph.D. in Human-Computer Interaction, Carnegie Mellon University).</p>
        <ol>
            <li>Amy was advised by <a href="https://www.cs.cmu.edu/~bam/" target="_blank">Brad A. Myers</a> (Ph.D. in Computer Science, University of Toronto).</li>
            <li>...Oh wait, this sounds familiar!</li>
        </ol>
        <Divider />
        {/* <ResearchTimeline/>
        <Divider /> */}
        <h3>Powerlifting</h3>
        <p>
            In my spare time, I do powerlifting, which is a sport dedicated to lifting as much as possible in the 
            {' '} squat, bench, and deadlift. I compete in the raw women's division in the 56kg weight class. I qualified for and competed in
            {' '} the USAPL 2024 Collegiate Nationals in Atlanta, Georgia and <a href="https://www.openpowerlifting.org/u/jennyliang" target="_blank">placed 45th</a>.
            {' '} My squat, bench, and deadlift are 242.5lbs (2.0x bodyweight), 112.5 lbs (0.95x bodyweight), and 297.5lbs (2.52x bodyweight) respectively.
        </p>
        <PhotoGrid>
            <img src={powerlifting1Src} alt="Asian girl doing a squat" />
            <img src={powerlifting2Src} alt="Asian girl doing a sumo deadlift" />
        </PhotoGrid>
        <Divider />
        <Travel />
    </React.Fragment>
);

export default AboutContent;