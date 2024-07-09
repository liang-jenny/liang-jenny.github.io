import React from 'react';
import styled from 'styled-components';
import { Tag } from 'antd';
import { hasData, Bold, Italic, ResearchProjectData } from './shared'; 
import { PlaySquareFilled, FilePdfOutlined, LaptopOutlined, GlobalOutlined, GithubFilled, FundProjectionScreenOutlined } from '@ant-design/icons';

import miningOssSkillsPoster from '../data/mining_oss_skills.pdf';
import understandingDevelopersPoster from '../data/understanding_developers.pdf';
import nlpositionalityPoster from '../data/nlpositionality.pdf';

const coauthorData: { [name: string]: { name: string, url?: string } } = require('../data/coauthors.json');

const ResearchProject = (props: ResearchProjectData) => {
    return (
        <ResearchProjectContainer key={props.title}>
            <ResearchProjectImageContainer>
                <img src={require('../img/research/' + props.imageName)} alt={'image of ' + props.title} />
            </ResearchProjectImageContainer>
            <div>
                <ResearchProjectMetadata>
                    <h3>{props.title} {hasData(props.awards) && props.awards?.map((e) => <Tag color='purple'>{e}</Tag>)} </h3>
                    {hasData(props.authors) && <p>{getCoauthorData(props.authors)}</p>}
                    {props.venue && props.year && <p><Italic>{props.venue}, {props.year}</Italic></p>}
                    {!props.venue && props.year && <p><Italic>{props.year}</Italic></p>}
                    <p style={{"marginTop": "8px"}}>{props.description}</p>
                </ResearchProjectMetadata>
                {<p style={{"fontSize": "0.9em"}}>{getUrlData(props.urls)}</p>}
            </div>
        </ResearchProjectContainer>
    )
}

const getCoauthorData = (keys?: string[]) => {
    const data: any[] = [];
    keys?.forEach((key: string) => {
        const tempKey = key.replace('*', '')
        const hasAsterisk = key.endsWith('*')
        if (coauthorData[tempKey] && coauthorData[tempKey].url) {
            data.push(<a href={coauthorData[tempKey].url} target="_blank" rel="noreferrer">{coauthorData[tempKey].name}{hasAsterisk ? '*' : ''}</a>)
            data.push(<React.Fragment>, </React.Fragment>)
        } else if (tempKey === 'jl' || tempKey === 'jtl') {
            data.push(<Bold>{coauthorData[tempKey].name}{hasAsterisk ? '*' : ''}</Bold>)
            data.push(<React.Fragment>, </React.Fragment>)
        } else {
            data.push(<React.Fragment>{coauthorData[tempKey].name}{hasAsterisk ? '*' : ''}</React.Fragment>)
            data.push(<React.Fragment>, </React.Fragment>)
        }
    })
    data.pop();

    return data;
}

const getUrlData = (urls?: {label: string, url: string}[]) => {
    const data: any[] = [];
    urls?.forEach((urlData: {label: string, url: string}) => {
        let icon = undefined;
        if (urlData.label === "presentation") {
            icon = <PlaySquareFilled/>;
        } else if (urlData.label === "paper") {
            icon = <FilePdfOutlined />;
        } else if (urlData.label === "demo") {
            icon = <LaptopOutlined />;
        } else if (urlData.label === "website") {
            icon = <GlobalOutlined />;
        } else if (urlData.label === "github") {
            icon = <GithubFilled />;
        } else if (urlData.label === "poster") {
            icon = <FundProjectionScreenOutlined />;
        }

        if (urlData.label !== "poster") {
            data.push(
                <React.Fragment>
                    <a href={urlData.url} target="_blank" rel="noreferrer">{icon} {urlData.label}</a>
                </React.Fragment>
            )   
        } else {
            if (urlData.url === "mining_oss_skills") {
                data.push(
                    <React.Fragment>
                        <a href={miningOssSkillsPoster} target="_blank" rel="noreferrer">{icon} {urlData.label}</a>
                    </React.Fragment>
                )
            } else if (urlData.url === "understanding_developers") {
                data.push(
                    <React.Fragment>
                        <a href={understandingDevelopersPoster} target="_blank" rel="noreferrer">{icon} {urlData.label}</a>
                    </React.Fragment>
                )
            } else if (urlData.url === "nlpositionality") {
                data.push(
                    <React.Fragment>
                        <a href={nlpositionalityPoster} target="_blank" rel="noreferrer">{icon} {urlData.label}</a>
                    </React.Fragment>
                )
            }
        }
        data.push(<React.Fragment> / </React.Fragment>)
    });
    data.pop();
    
    return data;
}

const ResearchProjectMetadata = styled.div`
    margin-bottom: 16px;
`

const ResearchProjectImageContainer = styled.div`
    img {
        max-height: 200px;
        max-width: 200px;
        border-radius: 4px;
    }

    ::before {
        content: "";
        background: linear-gradient(90deg, gray, lightgray);
        position: absolute;
        height: 210px;
        width: 210px;
        z-index: -1;
        filter: blur(10px);
    }

    @media (max-width: 650px) {
        margin: auto;
        ::before {
            max-height: fit-content;
            max-width: fit-content;
        }
    }
`

const ResearchProjectContainer = styled.div`
    display: grid;
    grid-gap: 36px;
    grid-template-columns: 200px 1fr;
    align-items: center;
    padding: 12px;
    border-radius: 4px;

    @media (max-width: 650px) {
        grid-template-rows: repeat(1, 1fr);
        grid-template-columns: none;
        img {
            max-height: 250px;
            max-width: 250px;
            width: 100%;
        }
    }

    p, h3 {
        margin-bottom: 2px;
    }
`

export default ResearchProject