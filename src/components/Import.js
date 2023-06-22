import React, { useState } from "react";
import {
  Container,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import "./import.css";

const Import = (props) => {
  const [makeId, setmakeId] = useState(null);

  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuClick = (event, makeId) => {
    console.log("makeId: ", makeId);
    setMenuAnchorEl(event.currentTarget);
    setmakeId(makeId);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };
  console.log("props: ", props);
  return (
    <div className="import-container">
      <Button
        variant="contained"
        color="primary"
        onClick={props.fetchMakes}
        className="import-button"
      >
        Import
      </Button>
      <h2>Count: {props.makes.length}</h2>
      <Container className="table-container">
        <Table style={{ width: 1200 }}>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Make</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.makes.map((make) => (
              <TableRow key={make.MakeId}>
                <TableCell>{make.MakeId}</TableCell>
                <TableCell>{make.MakeName}</TableCell>
                <TableCell>
                  <Button
                    aria-controls="actions-menu"
                    aria-haspopup="true"
                    onClick={(e) => handleMenuClick(e, make.MakeId)}
                  >
                    <MoreVert />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
      <Menu
        id="actions-menu"
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => props.deleteMake(makeId)}>Delete</MenuItem>
      </Menu>
    </div>
  );
};

export default Import;
