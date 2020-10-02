import { Card } from 'antd';
import React from 'react';

import classImg from '../../assets/class.png';

const { Meta } = Card;

export class Class extends React.Component {


    render() {

        return (
                <Card
                    hoverable
                    style={{width: 181}}
                    cover={<img alt="image" src={classImg} className={"classImg"}/>}
                    // onClick={this.showBookDetails.bind(this, info.bookId)}
                >
                    <Meta title={"软件工程实践"} description={'老师' + '沈备军'}/>
                </Card>
        );
    }

}

