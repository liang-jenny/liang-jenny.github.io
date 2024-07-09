import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

import profilePicSrc from "../img/jenny.jpg";
import cvSrc from "../data/cv.pdf";

type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
    {
        label: (<Link to='/'>Home</Link>),
        key: 'home',
        // icon: <HomeOutlined/>
    },
    {
        label: (<Link to='/about'>About</Link>),
        key: 'about',
        // icon: <InfoCircleOutlined />
    },
    {
        label: (<Link to='/papers'>Papers</Link>),
        key: 'papers',
        // icon: <FormOutlined />
    },
    {
        label: (<Link to='/projects'>Projects</Link>),
        key: 'projects',
        // icon: <BulbOutlined />
    },
];

const Header = (props: { page: string }) => {
    return (
        <React.Fragment>
            <HeaderContainer>
                <JennyPhoto src={profilePicSrc}/>
                <JennyInfo>
                    <h1>Jenny T. Liang (梁佳妮)</h1>
                    <Pronouns><a href="https://www.mypronouns.org/she-her" target="_blank" rel="noreferrer">(she/her/hers)</a></Pronouns>
                    <p>
                        Ph.D. Student in Software Engineering<br/>
                        <a href="https://www.cs.cmu.edu/" target="_blank" rel="noreferrer">School of Computer Science</a><br/>
                        <a href="https://www.cmu.edu/" target="_blank" rel="noreferrer">Carnegie Mellon University</a>
                    </p>
                    {/* <p><a href="https://www.s3d.cmu.edu/" target="_blank" rel="noreferrer">Software and Societal Systems Department</a></p> */}
                    {/* <p><a href="https://www.cs.cmu.edu/" target="_blank" rel="noreferrer">School of Computer Science</a></p> */}
                    {/* <p><a href="https://www.cmu.edu/" target="_blank" rel="noreferrer">Carnegie Mellon University</a></p> */}
                    <p>
                        <Email>jtliang [at] cs [dot] cmu [dot] edu </Email> <br/>
                        <a href={cvSrc} target="_blank" rel="noreferrer">CV</a> / <a href="https://scholar.google.com/citations?user=0NJ6figAAAAJ&hl=en&oi=ao" target="_blank" rel="noreferrer">Google Scholar</a>
                        {" "} / {" "}
                        <a href="https://twitter.com/jennytliang" target="_blank" rel="noreferrer">Twitter</a>
                    </p>
                </JennyInfo>
            </HeaderContainer>
            <MyMenu mode="horizontal" items={items} selectedKeys={[props.page]} theme={"light"} />
        </React.Fragment>
    )
}

const Pronouns = styled.span`
    display: block;
`

const MyMenu = styled(Menu)`
    margin-top: 36px;
    justify-content: center;
`

const Email = styled.span`
    font-family: monospace;
    font-size: 0.85em;
`

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 200px auto;
  grid-gap: 32px;

  @media (max-width: 450px) {
    display: grid;
    grid-gap: 0px;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: none;
  }
`

const JennyInfo = styled.div`
  h1, p {
    margin-bottom: 0px;
  }

  :nth-child(2) > :nth-child(2), :nth-child(2) > :nth-child(5) {
    margin-bottom: 16px;
  }
`

const JennyPhoto = styled.img`
  width: 100%;
  margin: auto;
  border-radius: 4px;

  @media (max-width: 450px) {
    max-width: 175px;
  }
`

export default Header;