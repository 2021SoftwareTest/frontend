import {Col, Row} from 'antd';
import React from 'react';

// this.props.unitCellContent格式
// {
//      title: "",
//      homeworkList: [{title: "", status: "", link: ""}]
// }

class UnitCell extends React.Component {
    constructor(props) {
        super(props);
    }

    renderHomeList(item) {
        return (
            <Row>
                <Col span={24}>
                    <p>{item.title}</p>
                </Col>
            </Row>
        );
    }

    render() {
        // eslint-disable-next-line react/prop-types
        const {title, homeworkList} = this.props.unitCellContent;
        // eslint-disable-next-line react/prop-types
        const listContent = homeworkList.map((item) => (this.renderHomeList(item)));
        return (
            <div className="unit-cell">
                <Row>
                    <Col span={24}>
                        <h2>{title}</h2>
                    </Col>
                </Row>
                <div className="homework-list-content">
                    {listContent}
                </div>
            </div>
        );
    }
}

export default UnitCell;
