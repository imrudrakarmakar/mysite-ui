import React, { useState, useEffect } from "react";
import "./NavigationMenu.css";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import SecurityIcon from "@material-ui/icons/Security";
import AccountTreeIcon from "@material-ui/icons/AccountTree";

import { NavLink } from "react-router-dom";

function NavigationMenu() {
  return (
    <div>
      <div className="navigation__main">
        <NavLink
          to="/projects"
          className="navbar__link"
          activeClassName="navbar__link--active"
        >
          <div className="navigation__opt">
            <AccountTreeIcon style={{ fontSize: 28 }} />
            <p className="navigation__p">Projects</p>
          </div>
        </NavLink>
        <NavLink
          to="/orgprofile"
          className="navbar__link"
          activeClassName="navbar__link--active"
        >
          <div className="navigation__opt">
            <WorkOutlineIcon style={{ fontSize: 28 }} />
            <p className="navigation__p">Organizations Profile</p>
          </div>
        </NavLink>
        <NavLink
          to="/accesscontrol"
          className="navbar__link"
          activeClassName="navbar__link--active"
        >
          <div className="navigation__opt">
            <SecurityIcon style={{ fontSize: 28 }} />
            <p className="navigation__p">Access Control</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default NavigationMenu;
