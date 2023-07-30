import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { person } from "../data";

const DatesAction = ({ deleteData, viewData }) => {
  return (
    <Row className="justify-content-center my-2">
      <Col className="d-flex justify-content-between" sm="8">
        <button onClick={deleteData} className="btn-style p-2 ">
          مسح الكل
        </button>
        <button onClick={viewData} className="btn-style p-2 ">
          عرض البيانات
        </button>
      </Col>
    </Row>
  );
};

export default DatesAction;
