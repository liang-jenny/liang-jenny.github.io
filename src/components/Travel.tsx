import React from 'react';
import styled from 'styled-components';
import WorldMap from "react-svg-worldmap";
import { PhotoGrid } from './shared';

import cabo1Src from "../img/travel/cabo1.jpeg";
import cabo2Src from "../img/travel/cabo2.jpeg";
import cabo3Src from "../img/travel/cabo3.jpeg";
import cdmx1Src from "../img/travel/cdmx1.png";
import cdmx2Src from "../img/travel/cdmx2.png";
import cdmx3Src from "../img/travel/cdmx3.png";
import lisbon1Src from "../img/travel/lisbon1.jpeg";
import lisbon2Src from "../img/travel/lisbon2.jpeg";
import lisbon3Src from "../img/travel/lisbon3.jpeg";
import singapore1Src from "../img/travel/singapore1.jpeg";
import singapore2Src from "../img/travel/singapore2.jpeg";
import singapore3Src from "../img/travel/singapore3.jpeg";
import melbourne1Src from "../img/travel/melbourne1.jpeg";
import melbourne2Src from "../img/travel/melbourne2.jpeg";
import melbourne3Src from "../img/travel/melbourne3.jpeg";
import toronto1Src from "../img/travel/toronto1.jpeg";
import toronto2Src from "../img/travel/toronto2.jpeg";
import toronto3Src from "../img/travel/toronto3.jpeg";
import pittsburgh1Src from "../img/travel/pittsburgh1.png";
import pittsburgh2Src from "../img/travel/pittsburgh2.png";
import pittsburgh3Src from "../img/travel/pittsburgh3.jpeg";
import honolulu1Src from "../img/travel/honolulu1.png";
import honolulu2Src from "../img/travel/honolulu2.png";
import honolulu3Src from "../img/travel/honolulu3.png";

const data = [
    { country: "br", value: "Porto de Galinhas (FSE 2024)" },
    { country: "pt", value: "Lisbon (ICSE 2024)" },
    { country: "us", value: "Pittsburgh (ICSE 2022), Honolulu (CHI 2024)" },
    { country: "mx", value: "Los Cabos (Mobicom 2019), Mexico City (FM+SE 2023)" },
    { country: "ca", value: "Toronto (ACL 2023)" },
    { country: "au", value: "Melbourne (ICSE 2023)" },
    { country: "my", value: "Singapore (FSE 2022)" },
];

const Travel = () => (
    <React.Fragment>
        <h3>Travel 🌍</h3>
        <p>
            I've been extremely fortunate to travel as part of my job; I'm even more grateful for the labs and travel grants who have made this possible.
            {' '} Through this, I've discovered my own passion for travel and learned lots about different countries and cultures. 
            {' '} Here's where I've traveled to during my research career and some photos from my travels.
        </p>
        <WorldMapContainer>
            <WorldMap
                color="#99D6FF"
                value-suffix="year"
                size="lg"
                data={data}
                frame
            />
        </WorldMapContainer>
        <LocationGrid>
            <div>
                <h4>CHI 2024 | May 2024 | Honolulu, United States</h4>
                <PhotoGrid>
                    <img src={honolulu1Src} alt="A bay with coral reefs surrounded by golden sand and lush green hills" />
                    <img src={honolulu2Src} alt="A bright red sunset aerial view of the Honolulu" />
                    <img src={honolulu3Src} alt="A bright sun rising over a crater filled with greenery" />
                </PhotoGrid>
            </div>
            <div>
                <h4>ICSE 2024 | April 2024 | Lisbon, Portugal</h4>
                <PhotoGrid>
                    <img src={lisbon3Src} alt="Green grass leading to a cliff overlooking the sea" />
                    <img src={lisbon1Src} alt="Sunset view of rural buildings through an arch" />
                    <img src={lisbon2Src} alt="A coffee with two croissants topped with sugar" />
                </PhotoGrid>
            </div>
            <div>
                <h4>FM+SE 2030 | November 2023 | Mexico City, Mexico</h4>
                <PhotoGrid>
                    <img src={cdmx1Src} alt="An aeriel city view of Mexity City" />
                    <img src={cdmx2Src} alt="A courtyard with a fountain topped with a woman figurine at the top, with a Mexican flag flying on the roof" />
                    <img src={cdmx3Src} alt="'Festivals and Ceremonies of the Totonaca Culture' by Diego Rivera, depicting Totonac people with elaborate clothing performing a ceramony, with a pyramid in the background" />
                </PhotoGrid>
            </div>
            <div>
                <h4>ACL 2023 | July 2023 | Toronto, Canada</h4>
                <PhotoGrid>
                    <img src={toronto3Src} alt="An aeriel city view of Toronto from the CN Tower" />
                    <img src={toronto2Src} alt="A city skyline view of Toronto from the river with the CN tower in the center" />
                    <img src={toronto1Src} alt="A fountain surrounded by greenery, with the Toronto skyline in the background" />
                </PhotoGrid>
            </div>
            <div>
                <h4>ICSE 2023 | May 2023 | Melbourne, Australia</h4>
                <PhotoGrid>
                    <img src={melbourne1Src} alt="Sunset view of a walkway surrounded by green grass, with Melbourne's city skyline in the background" />
                    <img src={melbourne2Src} alt="Two koalas sitting on a tree branch eating eucalyptus leaves" />
                    <img src={melbourne3Src} alt="An Asian girl crouched feeding a wallaby from her hand" />
                </PhotoGrid>
            </div>
            <div>
                <h4>FSE 2022 | November 2022 | Singapore</h4>
                <PhotoGrid>
                    <img src={singapore1Src} alt="A merlion spouting water into the ocean with the Singaporean skyline in the background" />
                    <img src={singapore2Src} alt="A rock garden sculpture in a pond surrounded by greenery, with the Marina Bay Sands in the background" />
                    <img src={singapore3Src} alt="A Buddhist shrine in an ornate red room, with a central, golden Buddha statue with two golden figurines next to it" />
                </PhotoGrid>
            </div>
            <div>
                <h4>ICSE 2022 | May 2022 | Pittsburgh, United States</h4>
                <PhotoGrid>
                    <img src={pittsburgh1Src} alt="Nighttime city skyline view of Pittsburgh, with three rivers joining into a V-shape" />
                    <img src={pittsburgh2Src} alt="Daytime city skyline view of Pittsburgh, with three rivers joining into a V-shape" />
                    <img src={pittsburgh3Src} alt="Carnegie Mellon campus, along with a view of the sculpture 'Walking to the Sky': a tall, tilted pole with people walking towards the sky on it" />
                </PhotoGrid>
            </div>
            <div>
                <h4>Mobicom 2019 | October 2019 | Los Cabos, Mexico</h4>
                <PhotoGrid>
                    <img src={cabo1Src} alt="Sunrise at the beach in Los Cabos, Mexico" />
                    <img src={cabo2Src} alt="Mexican storefronts with colorful papel picado strung between the buildings" />
                    <img src={cabo3Src} alt="Sunset at the beach in Los Cabos, Mexico" />
                </PhotoGrid>
            </div>
        </LocationGrid>
    </React.Fragment>
);

const WorldMapContainer = styled.div`
    .worldmap__figure-container {
        text-align: center;
    }
`

const LocationGrid = styled.div`
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    grid-gap: 16px;
`

export default Travel;