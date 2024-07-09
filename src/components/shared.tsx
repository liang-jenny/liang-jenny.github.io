import styled from "styled-components";

export const Bold = styled.span`
    font-weight: 700;
`

export const Italic = styled.span`
    font-style: italic;
`

export const hasData = (array?: any[]) => {
    return array && array.length > 0;
}

export const BlogTitle = styled.h1`
    line-height: 1;
`

export const BlogSubtitle = styled.h2`
    line-height: 1;
    color: gray;
`

export const tags: string[] = [
    "all",
    "award-winning",
    "software engineering",
    "human-computer interaction",
    "machine learning",
    "other",
    "demo"
]

export interface ResearchProjectData {
    title: string,
    description: string,
    urls: { label: string, url: string }[],
    imageName: string,
    authors?: string[],
    venue?: string,
    year?: number,
    tags?: string[],
    awards?: string[],
};

export const ResearchProjectsContainer = styled.div`
display: grid;
grid-template-rows: repeat(1, 1fr);
grid-gap: 24px;
`

export const Section = styled.div`
    margin-top: 36px;
`

export const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 8px;

    img {
        width: 100%;
    }

    @media (max-width: 650px) {
        grid-template-rows: repeat(1, 1fr);
        grid-template-columns: none;
        img {
            max-width: 250px;
            width: 100%;
            margin: auto;
        }
    }
`