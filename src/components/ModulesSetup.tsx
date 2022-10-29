import React from 'react';
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  Row
} from 'react-bootstrap';
import { VscChevronRight, VscDiscard } from 'react-icons/vsc';

const ModulesSetup: React.FC = () => {
  return (
    <article>
      <h2 className="fs-5 m-0">Modules Setup</h2>
      <p className="fs-small m-0 mb-4">
        Select the modules that the client can use..
      </p>
      <Form className="create-profile__form">
        <Row xl={2} md={2} sm={1}>
          <FormGroup className="form-group">
            <FormControl type="text" placeholder="Company Name *" />
          </FormGroup>
          <FormGroup className="form-group">
            <FormControl type="text" placeholder="Website" />
          </FormGroup>

          <FormGroup className="form-group">
            <FormControl type="text" placeholder="Select Business Category *" />
          </FormGroup>
          <FormGroup className="form-group">
            <FormControl
              type="text"
              placeholder="Select Facility Management Company *"
            />
          </FormGroup>

          <FormGroup className="form-group">
            <FormControl type="text" placeholder="Company Email Address *" />
          </FormGroup>
          <FormGroup className="form-group">
            <FormControl type="text" placeholder="Mobile Number *" />
          </FormGroup>

          <FormGroup className="form-group">
            <FormControl type="text" placeholder="Select State *" />
          </FormGroup>
          <Row>
            <Col className="col-9">
              <FormGroup className="form-group">
                <FormControl type="text" placeholder="Select City *" />
              </FormGroup>
            </Col>
            <Col className="col-3">
              <FormGroup className="form-group">
                <FormControl type="text" placeholder="Pincode *" />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup className="form-group">
            <FormControl type="text" placeholder="GST Number *" />
          </FormGroup>
          <FormGroup className="form-group">
            <FormControl type="text" placeholder="Fax Number" />
          </FormGroup>
        </Row>
        <div
          className="d-flex align-items-center gap-2"
          style={{ marginTop: '32px' }}
        >
          <Button className="icon-btn" type="submit" variant="primary">
            Save & Continue <VscChevronRight />
          </Button>
          <Button variant="light" type="reset" className="icon-btn">
            <VscDiscard /> Reset
          </Button>
        </div>
      </Form>
    </article>
  );
};

export default ModulesSetup;
