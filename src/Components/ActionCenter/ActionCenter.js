import React from "react";
import "./ActionCenter.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import GridOnIcon from "@mui/icons-material/GridOn";
import SyncIcon from "@mui/icons-material/Sync";

import { NavLink } from "react-router-dom";

function ActionCenter() {
  return (
    <div>
      <div className="actioncenter__main">
        <div className="actioncenter__opt">
          {/* <div className="actioncenter__outline"> */}
          {/* <div className="actioncenter__permission acstyle" activeClassName="actioncenter__opt--active">
                            <RssFeedIcon style={{fontSize: "25px"}} />
                            <p className="actioncenter__p">Permissions</p>
                        </div>
                    </div>
                    <div className="actioncenter__approval acstyle" activeClassName="actioncenter__opt--active">
                        <GridOnIcon style={{fontSize: "24px"}} />
                        <p className="actioncenter__p">Approval Matrix</p>
                    </div>
                </div>
                <div className="actioncenter__sync acstyle" activeClassName="actioncenter__opt--active">
                    <SyncIcon style={{fontSize: "25px"}} />
                    <p className="actioncenter__p">Last synced 15 mins ago</p>
                </div> */}

          <div className="actioncenter__outline">
            <NavLink
              to="/accesscontrol"
              className="actioncenter__nav"
              activeClassName="actioncenter__nav--active"
            >
              <div className="acstyle">
                <RssFeedIcon style={{ fontSize: "25px" }} />
                <p className="actioncenter__p">Permissions</p>
              </div>
            </NavLink>
          </div>
          <NavLink
            to="/accesscontrol"
            className="actioncenter__nav"
            activeClassName="actioncenter__nav--active"
          >
            <div className="acstyle">
              <GridOnIcon style={{ fontSize: "24px" }} />
              <p className="actioncenter__p">Approval Matrix</p>
            </div>
          </NavLink>
        </div>
        <div className="acstyle actioncenter__sync">
          <SyncIcon style={{ fontSize: "25px" }} />
          <p className="actioncenter__p">Last synced 15 mins ago</p>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default ActionCenter;
