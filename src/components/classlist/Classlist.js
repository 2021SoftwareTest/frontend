import { List } from 'antd';
import React from 'react';

import { Class } from '../class/Class';

export class ClassList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [
        { teacher: '臧斌宇', classId: 1, description: 'ICS', image: 'http://img3m7.ddimg.cn/48/0/24106647-1_w_6.jpg', name: '深入理解计算机系统' },
        {
          teacher: '沈备军',
          classId: 1,
          description: '从软件工程的本质出发、结合实际案例，系统全面地介绍软件过程、软件建模技术与方法及软件工程管理同时介绍一些热点新技术和新方法',
          image: 'http://img3m6.ddimg.cn/32/30/1204489076-1_w_1.jpg',
          name: '软件工程原理',
        },
        {
          teacher: '沈备军',
          classId: 1,
          description: '从软件工程的本质出发、结合实际案例，系统全面地介绍软件过程、软件建模技术与方法及软件工程管理同时介绍一些热点新技术和新方法',
          image: 'http://img3m6.ddimg.cn/32/30/1204489076-1_w_1.jpg',
          name: '软件工程原理',
        },
      ],
    };
  }

  componentDidMount() {}

  render() {
    return (
      <List
        grid={{ gutter: 10, column: 4 }}
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
