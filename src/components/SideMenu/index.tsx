import {Menu, MenuProps} from "antd";
import React, {useState} from "react";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {useLocation, useNavigate} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '/page1', <PieChartOutlined/>),
    getItem('Option 2', '/page2', <DesktopOutlined/>),
    getItem('User', 'user', <UserOutlined/>, [
        getItem('Tom', '/user/Tom'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'team', <TeamOutlined/>, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined/>),
];
const rootSubmenuKeys = ['user', 'team'];

const SideMenu: React.FC = () => {
    const [currOpenKeys, setCurrOpenKeys] = useState<string[]>([]);
    const currLocation = useLocation();
    const onOpenChange = (keys: string[]) => {
        // const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        const latestOpenKeys = keys.find((key) => currOpenKeys.indexOf(key) === -1);
        if (latestOpenKeys && rootSubmenuKeys.indexOf(latestOpenKeys) === -1) {
            setCurrOpenKeys(keys);
        } else {
            setCurrOpenKeys(latestOpenKeys ? [latestOpenKeys] : keys);
        }

    }

    const navigateTo = useNavigate();

    const menuClick = (e: { key: string }) => {
        console.log("Clicked: ", e.key);

        // programmatic navigation
        navigateTo(e.key);
    }

    // Use current path to compare with the path of all children in menu items. If equal, find the parent to
    // be used as the selectedKey of sidebar.
    const findSelectedParent = () => {
        const path = currLocation.pathname;

        const item = items.find((item) => {
            if (item && "children" in item && item.children) {
                return item.children.find((child) => {
                    if (child && child.key === path) {
                        return true;
                    }
                })
            }
        });
        return item?.key ? item.key.toString() : null;
    }

    return <Menu theme="dark" defaultSelectedKeys={[currLocation.pathname]} mode="inline"

    // return <Menu theme="dark" defaultSelectedKeys={[findSelectedKeys() ?? currLocation.pathname]} mode="inline"
                 items={items} onClick={menuClick}
                 onOpenChange={onOpenChange} openKeys={findSelectedParent() ? [findSelectedParent()!] : currOpenKeys}/>;
}

export default SideMenu
