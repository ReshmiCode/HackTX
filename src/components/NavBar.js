/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import { PageHeader, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const LandingPage = () => {
  return <PageHeader title="Neighbourhood Support" extra={[<NavLinks />]} />;
};

const NavLinks = () => {
  return (
    <header className="main-header">
      <div className="nav-links">
        <NavLink exact className="navLink" to="/">
          Search
        </NavLink>
        <NavLink exact className="navLink" to="/profile">
          <Avatar size="large" icon={<UserOutlined />} />
        </NavLink>
      </div>
    </header>
  );
};

export default LandingPage;
