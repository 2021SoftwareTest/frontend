import { Card } from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';

const { Meta } = Card;

export class Class extends React.Component {
    static propTypes = {
        info: Class.prototype
    };

    render() {

        const {info} = this.props;

        return (
            <Link to={{
                pathname: '/bookDetails',
                search: '?id=' + info.classId}}
                  target="_blank"
            >
                <Card
                    hoverable
                    style={{width: 200}}
                    cover={<img alt="image" src={info.image} className={"classImg"}/>}
                    // onClick={this.showBookDetails.bind(this, info.bookId)}
                >
                    <Meta title={info.name} description={'老师:' + info.teacher}/>
                </Card>
            </Link>
        );
    }

}

