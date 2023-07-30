import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../logo.svg";

const DatesList = ({ person }) => {
  return (
    <Row className="justify-content-center">
      <Col className="" sm="8">
        <div className="rectangle p-2 mt-3">
          {person.length ? (
            person.map((item) => {
              return (
                <div key={item.id} className="d-flex border-bottom mx-3 my-2">
                  <img alt="logo" src={logo} className="img-avatar" />
                  <div className="px-3">
                    <p className="d-inline fs-5">{item.name}</p>
                    <p className="fs-6">{item.date}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="p-5 text-center">لا يوجد مواعيد اليوم </h2>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default DatesList;
