import './ClassUser.css';

import {SearchOutlined} from '@ant-design/icons';
import {Button, Col, Drawer, Form, Input, message, Popover, Row, Table} from 'antd';
import React from 'react';
import {Highlighter} from 'react-highlight-words';

import {deleteUserInClass, editUserInClass, getUsersInClass} from "../../services/userService";

class ClassUser extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dataSource: [
              {userId:'0', userType:'0', userName:'teacher', school:'SJTU', ID: '00000', phone: '00000', email: '00@00.com'},
              {userId:'1', userType:'1', userName:'student', school:'SJTU', ID: '00001', phone: '00001', email: '01@01.com'},
            ],

            searchText: '',
            searchedColumn: '',

            addVisible: false,
            editVisible: false,
            loading: false,

            courseId:'1',
            userId: '',
            userType: '',
            userName: '',
            school: '',
            ID:'',
            phone:'',
            email:'',
        };
    }

    componentDidMount() {

        const callback = (data) => {
            this.setState({dataSource: data});
        };

        const user = JSON.parse(localStorage.getItem('user'));
        if (user === null) {
            message.error("请登录");
        } else if (user.userType !== 0) {
            message.error("你没有权限");
        } else {
            getUsersInClass({"classId": this.state.clas}, callback);
        }
    }

    showAddDrawer = () => {
        this.setState({
            addVisible: true,
        });
    };

    closeAddDrawer = () => {
        this.setState({
            addVisible: false,
        });
    };

    handleAdd = () => {
        console.log('addUser');
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
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    icon={<SearchOutlined/>}
                    size="small"
                    style={{width: 90, marginRight: 8}}
                >
                    Search
                </Button>
                <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{width: 90}}>
                    Reset
                </Button>
            </div>
        ),

        filterIcon: (filtered) => <SearchOutlined style={{color: filtered ? '#1890ff' : undefined}}/>,

        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),

        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },

        render: (text) =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{backgroundColor: '#ffc069', padding: 0}}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text.toString()}
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

    showEditDrawer = () => {
        this.setState({
            editVisible: true,
        });
    };

    closeEditDrawer = () => {
        this.setState({
            editVisible: false,
        });
    };

    handleEdit = (userId, userType, userName, school, ID, phone, email) => {
        this.showEditDrawer();
        this.setState(
            {
                userId: userId,
                userType: userType,
                userName: userName,
                school: school,
                ID: ID,
                phone: phone,
                email: email,
            }
        );
    };

    handleDelete = () => {
        const callback = (data) => {
            if (data.status >= 0) {
                message.success(data.msg);
                this.setState({
                  userId: '',
                  userType: '',
                  userName: '',
                  school: '',
                  ID: '',
                  phone: '',
                  email: '',
                });
                this.closeEditDrawer();
                const dataSource = [...this.state.dataSource];
                this.setState({
                    dataSource: dataSource.filter((item) => item.userId !== this.state.userId),
                });

                const callback = (data) => {
                    this.setState({dataSource: data});
                };
                getUsersInClass({"classId": this.state.classId}, callback);

            } else {
                message.error(data.msg);
            }
        };
        deleteUserInClass({"classId":this.state.classId, "userId":this.state.userId}, callback);
    };

    handleSubmit = () => {
        const callback = () => {
            message.success('修改成功');
            const tmp = this.state.dataSource;
            for (let i = 0; i < tmp.length; i++) {
                if (tmp[i].userId === this.state.userId) {
                    tmp[i].userType = this.state.userType;
                }
                this.setState({dataSource: tmp});
            }
            this.closeEditDrawer();
        };
        const json = {
            userId: this.state.userId,
            classId: this.state.classId,
            userType: this.state.userType
        };
        editUserInClass(json, callback);
    }

    render() {
        const columns = [
            {
                title: 'userId',
                dataIndex: 'userId',
                ...this.getColumnSearchProps('userId'),
                editable: false,
                sorter: (a, b) => a.userId - b.userId,
            },
            {
              title: 'userType',
              dataIndex: 'userType',
              ...this.getColumnSearchProps('userType'),
              editable: true,
              sorter: (a, b) => a.userType - b.userType,
              render: (text) =>
                  <Popover content={
                      <div>
                          <p> 0: teacher</p>
                          <p> 1: student</p>
                      </div>
                  } title="Attention">
                      <text>{text}</text>
                  </Popover>
          },
            {
                title: 'username',
                dataIndex: 'userName',
                ...this.getColumnSearchProps('userName'),
                editable: true,
                sorter: (a, b) => a.userName.length - b.userName.length,
            },
            {
                title: 'school',
                dataIndex: 'school',
                ...this.getColumnSearchProps('school'),
                  editable: true,
                }, {
                  title: 'ID',
                  dataIndex: 'ID',
                  ...this.getColumnSearchProps('ID'),
                  editable: true,
                  sorter: (a, b) => a.ID.length - b.ID.length,
                }, {
                  title: 'phone',
                  dataIndex: 'phone',
                  ...this.getColumnSearchProps('phone'),
                  editable: true,
                  sorter: (a, b) => a.phone.length - b.phone.length,
                }, {
                  title: 'email',
                  dataIndex: 'email',
                ...this.getColumnSearchProps('email'),
                editable: true,
                sorter: (a, b) => a.email.length - b.email.length,
            },
            {
                title: 'operation',
                dataIndex: 'operation',
                render: (text, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Button
                            onClick={() => {
                                this.handleEdit(record.userId, record.userType, record.userName, record.school, record.ID, record.phone, record.email);
                            }}>Edit
                        </Button>
                    ) : null
            },
        ];
        const {dataSource} = this.state;
        return (
          <div className="class-user">
                <Table
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                    scroll={{ x: 1500 }}
                    sticky
                />
                <Drawer
                    title="Edit user"
                    width={720}
                    onClose={this.closeEditDrawer}
                    visible={this.state.editVisible}
                    bodyStyle={{paddingBottom: 80}}
                    footer={
                        <div
                            style={{
                                textAlign: 'right',
                            }}
                        >
                            <Button onClick={this.handleDelete} style={{marginRight: 8}}>
                                Delete
                            </Button>
                            <Button onClick={this.handleSubmit} type="primary">
                                Submit
                            </Button>
                        </div>
                    }
                >
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="username"
                                    label="username"
                                    rules={[{required: true, message: 'Please enter username'}]}
                                >
                                    <Input placeholder="Please enter username" defaultValue={this.state.username}/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="password"
                                    label="password"
                                    rules={[{required: true, message: 'Please enter password'}]}
                                >
                                    <Input placeholder="Please enter password" defaultValue={this.state.password}/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="email"
                                    label="email"
                                    rules={[{required: true, message: 'Please enter email'}]}
                                >
                                    <Input placeholder="Please enter email" defaultValue={this.state.email}/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="address"
                                    label="address"
                                    rules={[{required: true, message: 'Please enter address'}]}
                                >
                                    <Input placeholder="Please enter address" defaultValue={this.state.address}/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="userType"
                                    label="userType"
                                    rules={[{required: true, message: 'Please choose a userType'}]}
                                >
                                    <Popover content={
                                        <div>
                                            <p>-1: ban</p>
                                            <p> 0: admin</p>
                                            <p> 1: customer</p>
                                        </div>
                                    } title="Attention">
                                        <Input placeholder="Please choose a userType"
                                               onChange={(e) => this.setState({userType: e.target.value})}
                                               defaultValue={this.state.userType}/>
                                    </Popover>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Drawer>
              </div>
        );
    }
}

export default ClassUser;
