import React from 'react';
import { Radio } from 'antd';
import { Bold, tags } from './shared';

const Filter = (props: { filter: string, setFilter: (value: any) => void }) => (
    <React.Fragment>
        <h3><Bold>Filter by:</Bold></h3>
        <Radio.Group value={props.filter} onChange={e => props.setFilter(e.target.value)}>
            {tags.map((element: string, index: number) => <Radio.Button value={element} key={index} type="primary">{element}</Radio.Button>)}
        </Radio.Group>
    </React.Fragment>
);

export default Filter;