import React from 'react';
import styled from 'styled-components';
import Alert from 'antd/es/alert';
import BackTop from 'antd/es/back-top';
import Table from 'antd/es/table';
import { LeftOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';

import profilePicSrc from "../img/understanding_skills.png";
import { BlogTitle, BlogSubtitle } from '../components/shared';

const MiningOssSkillsBlog = () => (
    <React.Fragment>
        <BackTop/>
        <p><Link to='/'><LeftOutlined /> {' '} Back to home</Link></p>
        <BlogTitle>Detecting Skills for Open-Source Software Development</BlogTitle>
        <BlogSubtitle>We can use GitHub data to detect soft and hard skills relevant to open-source software development.</BlogSubtitle>
        <p> by <Link to='/'>Jenny T. Liang</Link> | May 29, 2022 </p>
        <SpacedAlert message={
            <React.Fragment>
                <h2>Summary</h2>
                <ul>
                    <li>We introduce a novel method for detecting soft and hard skills related to OSS development and prototype it in a tool called DISKO.</li>
                    <li>Contributors find the skills DISKO detects to be important and would publicly show their proficiency in those skills.</li>
                    <li>
                        DISKO also demonstrates promising performance when detecting whether developers have OSS skills and in particular, when they 
                        have high proficiency in those skills.
                    </li>
                </ul>
            </React.Fragment>
        }/>
        <MainImage/>
        <p> 
            Building open-source software (OSS) successfully relies on diverse roles—maintainers wrangle contributors to build software, technical
            writers contribute to documentation, and software developers help program new features and fix bugs. At the core of these roles are
            <em> skills</em>: communication, technical writing, software engineering, collaboration, and more.
        </p>
        <p>
            <b>This research looks at how we can detect skills relevant to OSS development.</b> But, what can we use these detected skills for? Here's 
            some ideas on how we can use skills to transform OSS development and software engineering:
        </p>
        <ul>
            <li>Recommending potential contributors to project maintainers</li>
            <li>Assigning people to pull requests by expertise</li>
            <li>Providing individualized steps to help contributors improve their skills</li>
            <li>Showcasing contributors' expertise to others for expertise finding in teams</li>
            <li>...and more!</li>
        </ul>
        <h2>How can we detect skills?</h2>
        <p>
            There are potentially many ways to detect skills. We decided to approach this problem by looking at developers' GitHub activity. This adds
            a layer of objectivity to the skills detection, rather than solely relying on self-reporting.
        </p>
        <p>
            The key insight to our approach is looking at relevant measurable activities or cues that correspond to OSS-related skills. We call such
            activities or cues <em>signals</em>.
        </p>
        <SpacedAlert message={
            <div>
                <b>Key Insight:</b> Identify relevant measurable activities or cues that correspond to OSS-related skills.
            </div>
        }/>
        <p>
            Here are some examples of skills relevant to OSS development and some signals that go with each skill. For a full list of skills and 
            their signals, check out <a href="https://arxiv.org/pdf/2203.02027.pdf" target="_blank" rel="noreferrer">our paper</a>.
        </p>
        <TableContainer>
            {skillsSignalsData.map((skillData: { skill: string, signals: Signal[] }) => {
                return (
                    <React.Fragment>
                        <h3>{skillData.skill}</h3>
                        <FormattedTable columns={signalsColumns} dataSource={skillData.signals} pagination={false}/>
                    </React.Fragment>
                )
            })}
        </TableContainer>
        <h2>DISKO: Detecting Skills in Open-Source Software</h2>
        <p>
            We implement a tool called DISKO which detects skills by mining signals from GitHub data. Please refer to {' '}
            <a href="https://arxiv.org/pdf/2203.02027.pdf" target="_blank" rel="noreferrer">our paper</a> for details on the implementation of the
            tools. <b>We detect the following skills and rate the proficiency on a scale of 0 (i.e., no experience) to 5 (i.e., extremely proficient):</b>
        </p>
        <ol>
            <li>Teaches others to be involved in the OSS project</li>
            <li>Shows commitment to the OSS project</li>
            <li>Is familiar with OSS practices</li>
            <li>Has knowledge in a specific programming language (C, C#, Java, JavaScript, PHP, Python, Ruby, Shell, and TypeScript)</li>
        </ol>
        <p>
            Through a survey, 455 users rate the importance of the skills that DISKO shows and whether they would display having the skill publicly. 
            Another 316 users self-evaluate their skills and provide their GitHub usernames to evaluate the performance of DISKO.
        </p>
        <SpacedAlert message={<h3>Finding #1: The skills DISKO detects are important to OSS contributors.</h3>}/>
        <p>
            Our results show that OSS contributors find all the skills that DISKO detects important. In this case, the soft skills (i.e., having {' '}
            commitment and teaching others to be involved) were reported as most important. We report the percentage of participants that rated each
            skill as important.
        </p>
        <FormattedTable columns={importanceResultsColumns} dataSource={importanceResultsData} pagination={false}/>
        <SpacedAlert message={<h3>Finding #2: OSS contributors would publicly display DISKO's skills.​</h3>}/>
        <p>
            Our results show that OSS contributors would display all the skills that DISKO detects. In this case, the hard skills (i.e., being {' '}
            familiar with OSS practices and having knowledge of specific programming languages) were most likely to be displayed. We report the 
            percentage of participants that would display each skill.
        </p>
        <FormattedTable columns={displayResultsColumns} dataSource={displayResultsData} pagination={false}/>
        <SpacedAlert message={
            <h3>
                Finding #3: DISKO detects the presence of skills with high precision and skill proficiency with moderate precision.
            </h3>
        }/>
        <p>
            We measure the effectiveness of DISKO in detecting skills by evaluating the precision of the presence of skills (i.e., skill rating {'>'}
            {' '} 0) and the precision of high skill proficiency (i.e., skill rating {'>'} 3). On average, DISKO detects the presence of skills with
            {' '} a precision of 92.25% and high skill proficiency with a precision of 73%.
        </p>
        <FormattedTable columns={evaluationResultsColumns} dataSource={evaluationResultsData} pagination={false}/>
        <h2>Learn more...</h2>
        Want to learn more about this work? Here are some links:
        <ul>
            <li>
                <a href="https://arxiv.org/pdf/2203.02027.pdf" target="_blank" rel="noreferrer">Our paper</a>, which was published in the 
                International Conference for Software Engineering 2022.
            </li>
            <li>
                <a href="https://www.youtube.com/watch?v=hDjWuylCBNE" target="_blank" rel="noreferrer">Our talk</a>, which explains this 
                work in detail.
            </li>
        </ul>
    </React.Fragment>
);

interface Signal {
    key: string;
    signal: string;
    description: string;
}
  
const signalsColumns = [
    {
        title: 'Signal',
        dataIndex: 'signal',
        key: 'signal',
        width: 250
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description'
    },
];
  
const skillsSignalsData: { skill: string, signals: Signal[] }[] = [
    {
        skill: 'Teaches others to be involved in the OSS project​',
        signals: [
            {
                key: '1',
                signal: 'Works with newcomers',
                description: 'Contributes to a PR with a newcomer at least 3 times ​',
            },
            {
                key: '2',
                signal: 'Contributes to community health files',
                description: 'Contributes at least 5 changes to community health files at least once​',
            },
        ]
    },
    // {
    //     skill: 'Shows commitment to the OSS project​​',
    //     signals: [
    //         {
    //             key: '1',
    //             signal: 'Contribution duration',
    //             description: 'There is at least 12 months where there is at least one contribution / month​​',
    //         },
    //         {
    //             key: '2',
    //             signal: 'Commit volume',
    //             description: 'Is at the 75th percentile by number of commits to a repository across users​​',
    //         },
    //     ]
    // },
    // {
    //     skill: 'Is familiar with OSS practices​​​',
    //     signals: [
    //         {
    //             key: '1',
    //             signal: 'Commit activity',
    //             description: 'Has made a commit​'
    //         },
    //         {
    //             key: '2',
    //             signal: 'Comment activity',
    //             description: 'Has commented on another\'s issue​​',
    //         },
    //         {
    //             key: '3',
    //             signal: 'Issue activity',
    //             description: 'Has been assigned to an issue, closed an issue, or merged a PR​​​​​',
    //         },
    //     ]
    // },
    {
        skill: 'Has knowledge in a specific programming language',
        signals: [
            {
                key: '1',
                signal: 'Commit activity',
                description: 'Has made a commit in the language at least once​​'
            },
            {
                key: '2',
                signal: 'Number of lines changed',
                description: 'The lines changed in the language is at the 60th percentile across users​​​',
            },
        ]
    }
];

const importanceResultsColumns = [
    {
        title: 'Skill',
        dataIndex: 'skill',
        key: 'skill',
        width: 400
    },
    {
        title: 'Importance',
        dataIndex: 'importance',
        key: 'importance',
        render: (score: number) => {return score + "%"}
    },
];

const importanceResultsData: { key: string, skill: string, importance: number }[] = [
    {
        key: '1',
        skill: 'Teaches others to be involved in the OSS project​',
        importance: 64,
    },
    {
        key: '2',
        skill: 'Shows commitment to the OSS project​',
        importance: 67
    },
    {
        key: '3',
        skill: 'Is familiar with OSS practices​​​​',
        importance: 56
    },
    {
        key: '4',
        skill: 'Has knowledge in a specific programming language',
        importance: 45
    },
];

const displayResultsColumns = [
    {
        title: 'Skill',
        dataIndex: 'skill',
        key: 'skill',
        width: 400
    },
    {
        title: 'Would Display',
        dataIndex: 'display',
        key: 'display',
        render: (score: number | { skill: string, display: number }[]) => {
            if (typeof score === typeof 0) {
                return score + "%"
            } else {
                const min = (score as any)[0];
                const max = (score as any)[1];
                return min.display + '% (' + min.skill + ')' + ' — ' + max.display + '% (' + max.skill + ')'
            }
        }
    },
];

const displayResultsData: { key: string, skill: string, display: number | { skill: string, display: number }[] }[] = [
    {
        key: '1',
        skill: 'Teaches others to be involved in the OSS project​',
        display: 69,
    },
    {
        key: '2',
        skill: 'Shows commitment to the OSS project​',
        display: 67
    },
    {
        key: '3',
        skill: 'Is familiar with OSS practices​​​​',
        display: 79
    },
    {
        key: '4',
        skill: 'Has knowledge in a specific programming language',
        display: [{ skill: 'PHP', display: 54 }, { skill: 'JavaScript', display: 80 }]
    },
];

const evaluationResultsColumns = [
    {
        title: 'Skill',
        dataIndex: 'skill',
        key: 'skill',
        width: 400
    },
    {
        title: 'Skill Presence Precision',
        dataIndex: 'skillPresence',
        key: 'skillPresence',
        render: (score: number | { skill: string, display: number }[]) => {
            if (typeof score === typeof 0) {
                return score + "%"
            } else {
                const min = (score as any)[0];
                const max = (score as any)[1];
                return min.display + '% (' + min.skill + ')' + ' — ' + max.display + '% (' + max.skill + ')'
            }
        }
    },
    {
        title: 'Skill Proficiency Precision',
        dataIndex: 'skillProficiency',
        key: 'skillProficiency',
        render: (score: number | { skill: string, display: number }[]) => {
            if (typeof score === typeof 0) {
                return score + "%"
            } else {
                const min = (score as any)[0];
                const max = (score as any)[1];
                return min.display + '% (' + min.skill + ')' + ' — ' + max.display + '% (' + max.skill + ')'
            }
        }
    },
];

const evaluationResultsData: { 
    key: string, 
    skill: string,
    skillProficiency: number | { skill: string, display: number }[],
    skillPresence: number | { skill: string, display: number }[]
}[] = [
    {
        key: '1',
        skill: 'Teaches others to be involved in the OSS project​',
        skillPresence: 97,
        skillProficiency: 73,
    },
    {
        key: '2',
        skill: 'Shows commitment to the OSS project​',
        skillPresence: 96,
        skillProficiency: 63,
    },
    {
        key: '3',
        skill: 'Is familiar with OSS practices​​​​',
        skillPresence: 97,
        skillProficiency: 74,
    },
    {
        key: '4',
        skill: 'Has knowledge in a specific programming language',
        skillPresence: [{ skill: 'Ruby', display: 77 }, { skill: 'Python', display: 96 }],
        skillProficiency: [{ skill: 'PHP', display: 56 }, { skill: 'C#', display: 100 }]
    },
];

const SpacedAlert = styled(Alert)`
    margin-bottom: 16px;

    h3 {
        margin: 0;
    }

    h3, div { 
        text-align: center;
    }

    ul {
        text-align: left;
    }
`

const MainImage = () => (
    <MainImageContainer>
        <img src={profilePicSrc} alt="Example roles in open-source software development"/>
        <p>
            <em>
                Examples of roles in open-source software development. What skills do you think each role needs?
            </em>
        </p>
    </MainImageContainer>
)

const MainImageContainer = styled.div`
    margin: 24px 0px;

    img {
        display: block;
        margin: auto;
        margin-bottom: 4px;
    }

    p {
        text-align: center;
    }
`

const TableContainer = styled.div`
    padding: 16px;
`

const FormattedTable = styled(Table)`
    margin-bottom: 24px;

    @media (max-width: 450px) {
        col {
            width: 150px !important;
        }

        .ant-table-row > td:first-child {
            width: 100px;
        }
    }
`

export default MiningOssSkillsBlog;