import React from 'react'
import {
  AppstoreOutlined,
  ExclamationCircleOutlined,
  CheckSquareOutlined,
  UnorderedListOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Avatar, Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'

const { Sider } = Layout

const items: MenuProps['items'] = [
  {
    key: 'dashboard',
    icon: <AppstoreOutlined />,
    label: 'Dashboard',
  },
  {
    key: 'vital-task',
    icon: <ExclamationCircleOutlined />,
    label: 'Vital Task',
  },
  {
    key: 'my-task',
    icon: <CheckSquareOutlined />,
    label: 'My Task',
  },
  {
    key: 'task-categories',
    icon: <UnorderedListOutlined />,
    label: 'Task Categories',
  },
  {
    key: 'settings',
    icon: <SettingOutlined />,
    label: 'Settings',
  },
  {
    key: 'help',
    icon: <QuestionCircleOutlined />,
    label: 'Help',
  },
]

const Sidebar: React.FC = () => {
  return (
    <Sider className="bg-transparent! h-full relative pt-[50px]">
      <div className="bg-primary h-full rounded-r-[20px] rounded-b-none flex flex-col pt-[60px] relative">
        <div className="absolute -top-[40px] left-1/2 -translate-x-1/2 z-10">
          <Avatar
            size={80}
            icon={<UserOutlined />}
            src="/path/to/avatar.jpg" // Replace with actual image source or keep icon
            style={{
              backgroundColor: '#ccc',
              border: '4px solid #fff',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            }}
          />
        </div>

        <div className="flex flex-col items-center justify-center mb-3 px-4 text-center">
          <p className="text-white text-[16px] font-semibold m-0">
            Suphanat Panyakom
          </p>
          <p className="text-white text-[12px]">lorem@example.com</p>
        </div>

        <Menu
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          items={items}
          className="bg-transparent!"
          style={{ padding: '0 21px' }}
        />

        <div className="mt-auto pointer-cursor mb-8 px-6">
          <div className="flex items-center gap-3 text-white cursor-pointer hover:opacity-80 transition-opacity p-3">
            <LogoutOutlined style={{ fontSize: '18px' }} />
            <span className="font-medium">Logout</span>
          </div>
        </div>
      </div>
    </Sider>
  )
}

export { Sidebar }
