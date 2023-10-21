import React from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBContainer } from "mdb-react-ui-kit";
import Nav from "../../components/Layout/Nav";

export default function Welcome() {
  return (
    <MDBContainer className="home-page">
      <>Hello</>
    </MDBContainer>
  );
}
