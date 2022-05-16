import React from "react";
import { Col } from "react-bootstrap";

function UserProfile(props) {
  return (
    <Col md={3} mt="2">
      <p className="text-dark me-user">
        Welcome, <span className="text-info">{props.user.name}</span>
      </p>
      <hr />
      <table className="table">
        <tbody>
          <tr>
            <td>Username :</td>
            <td>{props.user.name}</td>
          </tr>
          <tr>
            <td>Email :</td>
            <td>{props.user.email}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{props.user.address.street}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{props.user.phone}</td>
          </tr>
        </tbody>
      </table>
    </Col>
  );
}

export default UserProfile;
