import React, { Fragment } from "react";
import { Icon, List } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { route } from "next/dist/next-server/server/router";

const SideMenu = () => {
  const router = useRouter();
  const isActive = (router) => route.pathname === route;
  return (
    <Fragment>
      <List
        style={{ paddingTop: "1rem" }}
        size="big"
        verticalAlign="middle"
        selection
      >
        <Link href="/">
          <List.Item active={isActive("/")}>
            <Icon name="home" size="large" color={isActive("/") && "teal"} />
            <List.Content>
              <List.Header content="Home"></List.Header>
            </List.Content>
          </List.Item>
        </Link>

        <Link href="/messages">
          <List.Item active={isActive("/messages")}>
            <Icon
              name="home"
              size="large"
              color={isActive("/messages") && "teal"}
            />
            <List.Content>
              <List.Header content="Home"></List.Header>
            </List.Content>
          </List.Item>
        </Link>
      </List>
    </Fragment>
  );
};

export default SideMenu;
