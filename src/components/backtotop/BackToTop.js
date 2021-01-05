import './BackToTop.css';

import {UpOutlined} from '@ant-design/icons';
import {BackTop} from 'antd';
import React from 'react';

const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
};

export class BackToTop extends React.Component {
    render() {
        return (
            <BackTop>
                <div style={style}>
                    <UpOutlined/>
                </div>
            </BackTop>
        );
    }
}
