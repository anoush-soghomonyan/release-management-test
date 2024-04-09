import React from 'react';
import './index.css';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a href="#">Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jane Doe',
    age: 28,
    address: 'Los Angeles, CA',
    tags: ['friendly', 'designer'],
  },
  {
    key: '3',
    name: 'Alice Johnson',
    age: 35,
    address: 'Dallas, TX',
    tags: ['organized', 'manager'],
  },
  {
    key: '4',
    name: 'Mike Smith',
    age: 45,
    address: 'Chicago, IL',
    tags: ['experienced', 'consultant'],
  },
  {
    key: '5',
    name: 'Emily Wilson',
    age: 30,
    address: 'Miami, FL',
    tags: ['creative', 'artist'],
  },
  {
    key: '6',
    name: 'Daniel Lee',
    age: 40,
    address: 'Seattle, WA',
    tags: ['analytical', 'engineer'],
  },
  {
    key: '7',
    name: 'Jessica Martinez',
    age: 29,
    address: 'San Francisco, CA',
    tags: ['dynamic', 'marketer'],
  },
  {
    key: '8',
    name: 'David Anderson',
    age: 38,
    address: 'Atlanta, GA',
    tags: ['team player', 'salesperson'],
  },
  {
    key: '9',
    name: 'Sarah Thompson',
    age: 33,
    address: 'Denver, CO',
    tags: ['detail-oriented', 'analyst'],
  },
  {
    key: '10',
    name: 'Christopher Harris',
    age: 42,
    address: 'Phoenix, AZ',
    tags: ['resourceful', 'entrepreneur'],
  },
  {
    key: '11',
    name: 'Olivia Rodriguez',
    age: 27,
    address: 'Houston, TX',
    tags: ['adaptable', 'consultant'],
  },
  {
    key: '12',
    name: 'William Taylor',
    age: 39,
    address: 'Philadelphia, PA',
    tags: ['goal-oriented', 'manager'],
  },
  {
    key: '13',
    name: 'Ava Garcia',
    age: 31,
    address: 'Boston, MA',
    tags: ['creative', 'designer'],
  },
  {
    key: '14',
    name: 'James Hernandez',
    age: 44,
    address: 'San Diego, CA',
    tags: ['dedicated', 'developer'],
  },
  {
    key: '15',
    name: 'Sophia Lopez',
    age: 34,
    address: 'Portland, OR',
    tags: ['innovative', 'engineer'],
  },
  {
    key: '16',
    name: 'Alexander Martinez',
    age: 29,
    address: 'Austin, TX',
    tags: ['dynamic', 'marketer'],
  },
  {
    key: '17',
    name: 'Mia Lee',
    age: 36,
    address: 'Nashville, TN',
    tags: ['organized', 'analyst'],
  },
  {
    key: '18',
    name: 'Benjamin Scott',
    age: 37,
    address: 'Detroit, MI',
    tags: ['experienced', 'consultant'],
  },
  {
    key: '19',
    name: 'Charlotte White',
    age: 26,
    address: 'Orlando, FL',
    tags: ['detail-oriented', 'analyst'],
  },
  {
    key: '20',
    name: 'Lucas Brown',
    age: 41,
    address: 'Las Vegas, NV',
    tags: ['resourceful', 'entrepreneur'],
  },
];

const TableAnt: React.FC = () => <Table columns={columns} dataSource={data} />;

export default TableAnt;
