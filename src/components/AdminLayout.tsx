import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';

import Sidebar from './Sidebar';
import User from './User';

const AdminLayout: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <Column
          xxl={2}
          xl={3}
          lg={3}
          md={3}
          className="min-md-vh-100 d-flex flex-column px-0"
        >
          <Sidebar />
          <User />
        </Column>
        <Column xxl={10} xl={9} lg={9} md={9} className="bg-bgColor min-vh-100">
          <Outlet />
        </Column>
      </Row>
    </Container>
  );
};

export default AdminLayout;
