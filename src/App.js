import logo from "./logo.svg";
import "./index.css";
import { Button, Col, Container, Row } from "react-bootstrap";

import { person } from "./data";
import DateCount from "./components/DateCount";
import DatesList from "./components/DatesList";
import DatesAction from "./components/DatesAction";
import { useEffect, useState } from "react";

function App() {
  const [personData, setpersonData] = useState(person);

  const onDelete = () => {
    setpersonData([]);
  };

  const onViewData = () => {
    setpersonData(person);
  };

  useEffect(() => {
    setpersonData([]);
  }, []);
  return (
    <div className="font color-body">
      <Container className="py-5">
        <DateCount person={personData} />
        <DatesList person={personData} />
        <DatesAction deleteData={onDelete} viewData={onViewData} />
      </Container>
    </div>
  );
}

export default App;
