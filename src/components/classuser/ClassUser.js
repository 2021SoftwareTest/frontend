import './ClassUser.css';

import { SearchOutlined } from '@ant-design/icons';
import {Button, Input, message, Space, Table} from 'antd';
import React from 'react';
import Highlighter from 'react-highlight-words';

import {deleteUserInClass, getUsersInClass} from "../../services/userService";

const dataSource = [
    {
        userId: '0',
        userType: '0',
        userName: 'teacher',
        school: 'SJTU',
        ID: '00000',
        phone: '00000',
        email: '00@00.com'
    },
    {
        userId: '1',
        userType: '1',
        userName: 'student',
        school: 'SJTU',
        ID: '00001',
        phone: '00001',
        email: '01@01.com'
    }
];


class ClassUser extends React.Component {

    state = {
        dataSource: [],
        classId: 0,

        searchText: '',
        searchedColumn: '',
    };

    componentDidMount() {
        this.setState({
            dataSource: dataSource,
            classId: 1,
        });
        const callback = (data) => {
            this.setState({dataSource: data});
        };
        const user = JSON.parse(localStorage.getItem('user'));
        if (user === null) {
            message.error("请登录");
        } else if (user.userType !== 0) {
            message.error("你没有权限");
        } else {
            getUsersInClass({"classId": this.state.classId}, callback);
        }
    }

    getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={(node) => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
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
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
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
        this.setState({ searchText: '' });
    };

    handleDelete = (userId) => {
        const callback = (data) => {
            if (data.status >= 0) {
                message.success(data.msg);
                const dataSource = [...this.state.dataSource];
                this.setState({
                    dataSource: dataSource.filter((item) => item.userId !== userId),
                });

                const callback = (data) => {
                    this.setState({dataSource: data});
                };
                getUsersInClass({"classId": this.state.classId}, callback);

            } else {
                message.error(data.msg);
            }
        };
        deleteUserInClass({"classId": this.state.classId, "userId": userId}, callback);
    };

    render() {

        const {dataSource} = this.state;
        const columns = [
            {
                title: '序号',
                dataIndex: 'userId',
                key: 'userId',
                sorter: (a, b) => a.userId - b.userId,
            },
            {
                title: '类型',
                dataIndex: 'userType',
                filters: [
                    {text: '教师', value: '0'},
                    {text: '学生', value: '1'},
                ],
                onFilter: (value, record) => record.userType.indexOf(value) === 0,
                render: (text) =>
                    <text>
                        {text === '0' ? '教师' : '学生'}
                    </text>
            },
            {
                title: '姓名',
                dataIndex: 'userName',
                ...this.getColumnSearchProps('userName'),
            },
            {
                title: '学号',
                dataIndex: 'ID',
                sorter: (a, b) => a.ID - b.ID,
            }, {
                title: '手机',
                dataIndex: 'phone',
            }, {
                title: '邮箱',
                dataIndex: 'email',
            },
            {
                title: '操作',
                dataIndex: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <a onClick={this.handleDelete(record.userId)}>Delete</a>
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
