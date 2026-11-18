import styled from "styled-components";
import { Tooltip } from "antd"

const Footer = () => (
    <FooterContainer>
        Made with <Tooltip title="for P.M. :)">❤️</Tooltip> by Jenny T. Liang
    </FooterContainer>
);

const FooterContainer = styled.div`
    margin-top: 16px;
    text-align: right;
    font-size: 0.9em;
`

export default Footer;