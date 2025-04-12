import React from 'react';
import ResearchProject from './ResearchProject';
import { ResearchProjectData, ResearchProjectsContainer }  from './shared';
import { Link } from 'react-router-dom';

const publicationsData: ResearchProjectData[] = require('../data/publications.json');
const seHciData: ResearchProjectData[] = publicationsData.filter(
    (e: ResearchProjectData) => [
        "A Qualitative Study on the Implementation Design Decisions of Developers"
    ].includes(e.title)
);
const hciAiData: ResearchProjectData[] = publicationsData.filter(
    (e: ResearchProjectData) => [
        "NLPositionality: Measuring Positionality and Design Biases in Datasets and Models in NLP",
        "A Large-Scale Survey on the Usability of AI Programming Assistants: Successes and Challenges"
    ].includes(e.title)
);
const seAiData: ResearchProjectData[] = publicationsData.filter(
    (e: ResearchProjectData) => [
        "Can GPT-4 Replicate Empirical Software Engineering Research?",
    ].includes(e.title)
);

const ResearchHighlights = () => (
    <React.Fragment>
        <h3>Selected Publications</h3>
        <p>Here are a sample of research projects I have led. For a complete list of publications, please refer to the <Link to="/papers">Publications</Link> page.</p>
        <h4>Developer Behavior (SE+HCI)</h4>
        {
            <ResearchProjectsContainer>
                {seHciData
                    .map((e: ResearchProjectData) => {
                        return (
                            <ResearchProject key={e.title} projectData={e} hideDescription={true} hideLinks={true} / >
                        )
                    })
                }
            </ResearchProjectsContainer>
        }
        <h4>Human-AI Interaction (HCI+AI)</h4>
        {
            <ResearchProjectsContainer>
                {hciAiData
                    .map((e: ResearchProjectData) => {
                        return (
                            <ResearchProject key={e.title} projectData={e} hideDescription={true} hideLinks={true} / >
                        )
                    })
                }
            </ResearchProjectsContainer>
        }
        <h4>AI-supported Software Development (SE+AI)</h4>
        {
            <ResearchProjectsContainer>
                {seAiData
                    .map((e: ResearchProjectData) => {
                        return (
                            <ResearchProject key={e.title} projectData={e} hideDescription={true} hideLinks={true} / >
                        )
                    })
                }
            </ResearchProjectsContainer>
        }
    </React.Fragment>
);

export default ResearchHighlights;