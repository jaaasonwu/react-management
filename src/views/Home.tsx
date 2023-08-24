import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import {Breadcrumb, Layout, theme} from 'antd';
import SideMenu from "@/components/SideMenu";

const {Header, Content, Footer, Sider} = Layout;


const HomeView: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken()


    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo"/>
                // openKeys: current expanded item
                <SideMenu/>
            </Sider>
            <Layout>
                <Header style={{paddingLeft: '16px', background: colorBgContainer}}>
                    <Breadcrumb style={{lineHeight: '64px'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                <Content style={{margin: '16px 16px 0'}} className={"site-layout-background"}>
                    <Outlet/>
                </Content>
                <Footer style={{textAlign: 'center', padding: 0, lineHeight: '48px'}}>Jason Wu ©2023</Footer>
            </Layout>
        </Layout>
    );
};

export default HomeView;