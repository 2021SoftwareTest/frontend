import {List} from 'antd';
import React from 'react';
import {Class} from "../class/Class";

export class ClassList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {classes:[]};
    }

    componentDidMount() {

    }

    render() {
        return (
            <List
                grid={{gutter: 10, column: 4}}
                dataSource={this.state.classes}
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 16,
                }}

                renderItem={(item) => (
                    <List.Item>
                        <Class info={item} />
                    </List.Item>
                )}
            />
        );
    }

}
