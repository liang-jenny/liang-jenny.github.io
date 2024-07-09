import React from 'react';
import { BackTop } from 'antd';

import Header from '../components/Header';
import Footer from './Footer';

const PageTemplate = (props: { element: React.ReactNode, page: string }) => (
  <React.Fragment>
    <Header page={props.page}/>
    {/* <Divider/> */}
    {props.element}
    <Footer/>
    <BackTop/>
  </React.Fragment>
);

export default PageTemplate;