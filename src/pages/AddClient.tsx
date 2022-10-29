import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Tab, Tabs } from 'react-bootstrap';
import { VscBell } from 'react-icons/vsc';
import CreateProfile from '../components/CreateProfile';
import ModulesSetup from '../components/ModulesSetup';
import PaymentSetup from '../components/PaymentSetup';
import ThemeSetup from '../components/ThemeSetup';

const AddClient: React.FC = () => {
  return (
    <section className="py-3 px-2 h-100">
      <header className="d-flex align-items-center justify-content-between">
        <div>
          <h2 className="fs-4 fw-semibold pt-1">Add Client</h2>
          <Breadcrumb className="fs-small">
            <BreadcrumbItem>Client Master</BreadcrumbItem>
            <BreadcrumbItem>Add Client</BreadcrumbItem>
            <BreadcrumbItem active>Create Profile</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Button variant="">
          <VscBell />
        </Button>
      </header>

      <div
        className="bg-white rounded-2"
        style={{ boxShadow: '0px 1px 5px 0px #03003714' }}
      >
        <Tabs defaultActiveKey="create-profile">
          <Tab eventKey="create-profile" title="01 Create Profile">
            <CreateProfile />
          </Tab>
          <Tab eventKey="payment-setup" title="02 Payment Setup">
            <PaymentSetup />
          </Tab>
          <Tab eventKey="theme-setup" title="03 Theme Setup">
            <ThemeSetup />
          </Tab>
          <Tab eventKey="modules-setup" title="04 Modules Setup">
            <ModulesSetup />
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default AddClient;
