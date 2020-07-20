import React, { useState, useMemo } from "react";
import Table from "antd/lib/table";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import {
  Dialog,
  DialogContent,
  CloseAction,
  CloseIcon,
  Title,
  HotButton,
  SingleAction,
} from "./styles";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    left: "50%",
    height: "-webkit-fill-available",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  table: {
    minWidth: 600,
  },
}));

const ModalData = ({ open, onClose, covidData = [] }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const columns = [
    {
      title: "Country",
      dataIndex: "Country",
      key: "Country",
    },
    {
      title: "Cases",
      dataIndex: "Cases",
      key: "Cases",
    },
    {
      title: "Date",
      dataIndex: "Date",
      key: "Date",
    },
  ];

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <Title>Resultado</Title>
        <Table columns={columns} dataSource={covidData} />
      </div>
    </Modal>
  );
};

export default ModalData;
