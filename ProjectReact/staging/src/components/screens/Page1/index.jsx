import React, { Component } from "react";
import "./index.scss"
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.min.css';

export default class Page1 extends Component {
    render() {
        return (
            <div className="Page1">
                <Tooltip title="search">
                    <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
                <Button type="primary" shape="circle">
                    A
                </Button>
                <Button type="primary" icon={<SearchOutlined />}>
                    Search
                </Button>
                <Tooltip title="search">
                    <Button shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
                <Button icon={<SearchOutlined />}>Search</Button>
                <br />
                <Tooltip title="search">
                    <Button shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
                <Button icon={<SearchOutlined />}>Search</Button>
                <Tooltip title="search">
                    <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
                <Button type="dashed" icon={<SearchOutlined />}>
                    Search
                </Button>
                <Button icon={<SearchOutlined />} href="https://www.google.com" />
                <br />
                <br />
                <Tooltip title="search">
                    <Button type="primary" shape="circle" icon={<SearchOutlined />} size="large" />
                </Tooltip>
                <Button type="primary" shape="circle" size="large">
                    A
                </Button>
                <Button type="primary" icon={<SearchOutlined />} size="large">
                    Search
                </Button>
                <Tooltip title="search">
                    <Button shape="circle" icon={<SearchOutlined />} size="large" />
                </Tooltip>
                <Button icon={<SearchOutlined />} size="large">
                    Search
                </Button>
                <br />
                <Tooltip title="search">
                    <Button shape="circle" icon={<SearchOutlined />} size="large" />
                </Tooltip>
                <Button icon={<SearchOutlined />} size="large">
                    Search
                </Button>
                <Tooltip title="search">
                    <Button type="dashed" shape="circle" icon={<SearchOutlined />} size="large" />
                </Tooltip>
                <Button type="dashed" icon={<SearchOutlined />} size="large">
                    Search
                </Button>

            </div>
        )
    }

} 