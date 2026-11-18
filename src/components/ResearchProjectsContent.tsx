import React, { useState } from 'react';
import { Divider, Radio } from 'antd';
import ResearchProject from './ResearchProject';
import { hasData, ResearchProjectsContainer, Bold, ResearchProjectData, tags, Section } from './shared'; 

const projectsData: ResearchProjectData[] = require('../data/projects.json');

const ResearchProjectsContent = () => {
    return (
        <Section>
            <h2>Other Projects</h2>
            <ResearchProjectsContainer>
                {projectsData
                    .map((e: ResearchProjectData) => {
                        return (
                            <ResearchProject key={e.title} projectData={e} / >
                        )
                    })
                }
            </ResearchProjectsContainer>
        </Section>
    );
}

export default ResearchProjectsContent;