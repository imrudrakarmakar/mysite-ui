import React from "react";
import "./TableDataContent.css";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

import { useHistory } from "react-router-dom";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

function createData(name, access, summary, update, active) {
  return {
    name,
    access,
    summary,
    update,
    active,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const [checked, setChecked] = React.useState(true);
  const [accessAR, setAccessAR] = React.useState("");

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  // const handleAccessChange = (event) => {
  //   setAccessAR(event.target.access) === "No Access";
  // };

  function trueAccess(access) {
    if (access === "All Access") {
      return trueAccessSwitch(1);
    } else if(access === "Restricted Access") {
      return trueAccessSwitch(2);
    } else {
      return trueAccessSwitch(3);
    }
  }

  let Acl;
  function trueAccessSwitch(colorNo) {
    switch (colorNo) {
      case 1: Acl = "accessStl1"; break;
      case 2: Acl = "accessStl2"; break;
      case 3: Acl = "accessStl3"; break;
    }
  }

  // function trueSummry(summry) {
  //   if(summry === "No Access") {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <RemoveCircleOutlineOutlinedIcon />
            ) : (
              <AddCircleOutlineOutlinedIcon />
            )}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center">
          <div Acl={trueAccess(row.access)} className={Acl} >
            {row.access}
          </div>
        </TableCell>
        <TableCell align="center">
          {/* {row.summary} */}
          {active ? "" : "View | Create | Edit | Delete "}
        </TableCell>
        <TableCell align="center">{row.update}</TableCell>
        <TableCell align="center">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setActive(!active)}
          >
            <FormControlLabel
              control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              label=""
            />
          </IconButton>
          {row.active}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h7" gutterBottom component="div">
                All aspects in the bindding module
              </Typography>
              <Table size="small" aria-label="control">
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="accessStyle">
                        <FormControl component="fieldset">
                          <FormLabel component="legend">
                            Access Control
                          </FormLabel>
                          <RadioGroup
                            aria-label="access"
                            defaultValue="All Access"
                            name="radio-buttons-group"
                          >
                            <div className="form__group">
                              <FormControlLabel
                                value="allaccess"
                                // onChange={handleAccessChange}
                                control={<Radio defaultChecked />}
                                label=""
                              />
                              <div className="form__data">
                                <p className="form__text">All Access</p>
                                <p className="helperText">
                                  Can access all items
                                </p>
                              </div>
                            </div>
                            <div className="form__group">
                              <FormControlLabel
                                value="restricted"
                                // onChange={handleAccessChange}
                                control={<Radio />}
                                label=""
                              />
                              <div className="form__data">
                                <p className="form__text">Restricted Access</p>
                                <p className="helperText">
                                  Can access oly assigned or created items
                                </p>
                              </div>
                            </div>
                          </RadioGroup>
                        </FormControl>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Permissions</FormLabel>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox />}
                            label="View items in access"
                          />
                          <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Edit items in access"
                          />
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Create items in access"
                          />
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Delete items in access"
                          />
                        </FormGroup>
                      </FormControl>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    access: PropTypes.number.isRequired,
    update: PropTypes.number.isRequired,
    summary: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    active: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("Budget", "All Access", "", "1 min ago", ""),
  createData("Bidding", "No Access", "", "1 min ago", ""),
  createData("Vendor Portal", "Restricted Access", "", "1 min ago", ""),
  createData(
    "Purchase Order/Work Order",
    "Restricted Access",
    "",
    "1 min ago",
    ""
  ),
  createData("Organisational Profile", "All Access", "", "1 min ago", "", 1.5),
  createData("Permissions & Access Control", "No Access", "", "1 min ago", ""),
];

function TableDataContent() {
  const history = useHistory();

  return (
    <div>
      <div className="tabledatacontent__main">
        <div className="tabledatacontent__nav">
          <div className="tabledatacontent__navicon">
            <ArrowBackIcon onClick={() => history.push("/accesscontrol")} />
          </div>
          <div className="tabledatacontent__navicon">
            <p>Management</p>
          </div>
          <div className="tabledatacontent__navicon">
            <ModeEditOutlineOutlinedIcon />
          </div>
        </div>

        <div className="tabledatacontent__controlmain">
          <div className="tabledatacontent__opt">
            <div className="tabledatacontent__outline">
              <div className="tabledatacontent__permission acstyle">
                <p className="tabledatacontent__p">Access Control</p>
              </div>
            </div>
            <div className="tabledatacontent__approval acstyle">
              <p className="tabledatacontent__p">Assigned Members</p>
            </div>
          </div>
        </div>

        <div className="tabledatacontent__table">
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow className="tabledatacontent__tablerow">
                  <TableCell />
                  <TableCell>Department/Role Name</TableCell>
                  <TableCell align="center">Access Level</TableCell>
                  <TableCell align="center">Summary</TableCell>
                  <TableCell align="center">Last Updated</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <Row key={row.name} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default TableDataContent;
