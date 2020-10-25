/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { PageHeader, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const LandingPage = () => {
  return <PageHeader title="Neighbourhood Support" extra={[<NavLinks />]} />;
};

const NavLinks = () => {
  return (
    <header className="main-header">
      <div className="nav-links">
        <a className="navLink">Search</a>
        <a className="navLink">
          <Avatar size="large" icon={<UserOutlined />} />
        </a>
      </div>
    </header>
  );
};

export default LandingPage;
