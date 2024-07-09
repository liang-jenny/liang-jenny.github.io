import React, { useState } from 'react';
import { Divider } from 'antd';

import ResearchProject from "./ResearchProject";
import { hasData, ResearchProjectData, ResearchProjectsContainer, Section } from './shared'; 
import Filter from './Filter';

const publicationsData: ResearchProjectData[] = require('../data/publications.json');


const PapersContent = () => {
    const [filter, setFilter] = useState<string>("all");

    const filteredPublications = publicationsData.filter(
        (e: ResearchProjectData) => {
            return filter === "all" ? true : e.tags?.includes(filter);
        }
    )

    return (
        <React.Fragment>
            <Filter filter={filter} setFilter={setFilter}/>
            {hasData(publicationsData) && (
                <Section>
                    <h2>Peer-Reviewed Publications</h2>
                    {filteredPublications.length > 0 ? (                        
                        <React.Fragment>
                            {
                                Array.from(
                                    new Set(
                                        filteredPublications.map((e: ResearchProjectData) => {return e.year})
                                            .filter((year: number | undefined) => year !== undefined)
                                    )
                                ).map((year: number | undefined) => (
                                    <React.Fragment>
                                        <Divider orientation="left" plain><h3>{year}</h3></Divider>
                                        <ResearchProjectsContainer>
                                            {filteredPublications
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
                        <React.Fragment>I currently don't have any peer-reviewed publications in this area. But hopefully I will in the future!</React.Fragment>
                    )}
                </Section>
            )}
        </React.Fragment>
    );
}

export default PapersContent;