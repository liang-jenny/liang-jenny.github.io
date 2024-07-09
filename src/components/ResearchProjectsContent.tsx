import React, { useState } from 'react';
import { Divider, Radio } from 'antd';
import ResearchProject from './ResearchProject';
import { hasData, ResearchProjectsContainer, Bold, ResearchProjectData, tags, Section } from './shared'; 

const projectsData: ResearchProjectData[] = require('../data/projects.json');

const ResearchProjectsContent = () => {
    const [filter, setFilter] = useState<string>("all");

    const filteredProjects = projectsData.filter(
        (e: ResearchProjectData) => {
            return filter === "all" ? true : e.tags?.includes(filter);
        }
    )

    return (
        <React.Fragment>
            <h3><Bold>Filter by:</Bold></h3>
            <Radio.Group value={filter} onChange={e => setFilter(e.target.value)}>
                {tags.map((element: string, index: number) => <Radio.Button value={element} key={index} type="primary">{element}</Radio.Button>)}
            </Radio.Group>
            {hasData(projectsData) && (
                <Section>
                    <h2>Research Projects</h2>
                    {filteredProjects.length > 0 ? (
                        <React.Fragment>
                            {
                                Array.from(
                                    new Set(
                                        filteredProjects.map((e: ResearchProjectData) => {return e.year})
                                            .filter((year: number | undefined) => year !== undefined)
                                    )
                                ).map((year: number | undefined) => (
                                    <React.Fragment>
                                        <Divider orientation="left" plain><h3>{year}</h3></Divider>
                                        <ResearchProjectsContainer>
                                            {filteredProjects
                                                .filter((e: ResearchProjectData) => e.year === year)
                                                .map((e: ResearchProjectData) => {
                                                    return (
                                                        <ResearchProject key={e.title} {...e} / >
                                                    )
                                                })
                                            }
                                        </ResearchProjectsContainer>
                                    </React.Fragment>
                                ))
                            }
                        </React.Fragment>
                    ) : (
                        <React.Fragment>I don't have any previous or ongoing projects in this area. But maybe I will in the future!</React.Fragment>
                    )}
                </Section>
            )}
        </React.Fragment>
    );
}

export default ResearchProjectsContent;