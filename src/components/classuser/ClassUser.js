import './ClassUser.css';

import {SearchOutlined} from '@ant-design/icons';
import {Button, Input, message, Space, Table} from 'antd';
import React from 'react';
import Highlighter from 'react-highlight-words';

import {deleteCourseUser, getCourseUser} from "../../services/courseService";


class ClassUser extends React.Component {

    state = {
        dataSource: [],
        courseId: 0,

        searchText: '',
        searchedColumn: '',
    };

    componentDidMount() {
        this.setState({
            courseId: this.props.courseId,
        });
        const callback = (data) => {
            console.log("getUser", data);
            this.setState({dataSource: data.data});
        };
        const data = {
            "courseId": this.props.courseId,
        };
        getCourseUser(data, callback);
    }

    getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
            <div style={{padding: 8}}>
                <Input
                    ref={(node) => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{width: 188, marginBottom: 8, display: 'block'}}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined/>}
                        size="small"
                        style={{width: 90}}
                    >
                        Search
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{width: 90}}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => <SearchOutlined style={{color: filtered ? '#1890ff' : undefined}}/>,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        render: (text) =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{backgroundColor: '#ffc069', padding: 0}}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = (clearFilters) => {
        clearFilters();
        this.setState({searchText: ''});
    };

    handleDelete = (userID) => {
        const callback = (data) => {
            if (data.status === 200) {
                message.success(data.msg);
                const dataSource = [...this.state.dataSource];
                this.setState({
                    dataSource: dataSource.filter((item) => item.userID !== userID),
                });
            } else {
                message.error(data.msg);
            }
        };
        deleteCourseUser({courseId: this.state.courseId, students:[{userId: userID}]}, callback);
    };

    render() {

        const {dataSource} = this.state;
        const columns = [
            {
                title: '??????',
                dataIndex: 'userID',
                key: 'userID',
                sorter: (a, b) => a.userID - b.userID,
            },
            {
                title: '??????',
                dataIndex: 'userType',
                filters: [
                    {text: '??????', value: 1},
                    {text: '??????', value: 2},
                ],
                onFilter: (value, record) => record.userType === value,
                render: (text) =>
                    <text>
                        {text === 1 ? '??????' : '??????'}
                    </text>
            },
            {
                title: '??????',
                dataIndex: 'name',
                ...this.getColumnSearchProps('name'),
            },
            {
                title: '??????',
                dataIndex: 'id',
                sorter: (a, b) => a.id - b.id,
            }, {
                title: '??????',
                dataIndex: 'phone',
            }, {
                title: '??????',
                dataIndex: 'email',
            },
            {
                title: '??????',
                dataIndex: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <Button onClick={() => {this.handleDelete(record.userID);}}>Delete</Button>
                    </Space>
                )
            },
        ];

        return (
            <div className="class-user">
                <Table
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                />
            </div>
        );
    }
}

export default ClassUser;
