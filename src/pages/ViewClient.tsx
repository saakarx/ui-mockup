import React, { forwardRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Dropdown,
  Table,
  DropdownButtonProps,
  FormSelect,
  Pagination
} from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import {
  VscCircleSlash,
  VscEdit,
  VscEye,
  VscTrash,
  VscKebabVertical,
  VscChevronLeft,
  VscChevronRight,
  VscBell
} from 'react-icons/vsc';
import { FiDownload } from 'react-icons/fi';

import { getClients } from '../utils/clients';
import { ClientType } from '../types/client.type';

export const loader = async () => {
  const data = await getClients();
  return data;
};

const CustomToggle = forwardRef<HTMLButtonElement, DropdownButtonProps>(
  ({ onClick }, ref) => (
    <Button
      ref={ref}
      onClick={e => {
        if (!onClick) return;
        e.preventDefault();
        onClick(e);
      }}
      variant=""
      style={{ width: '32px', height: '32px' }}
      className="p-0"
    >
      <VscKebabVertical />
    </Button>
  )
);

const ViewClient: React.FC = () => {
  const clients = useLoaderData() as ClientType[];

  return (
    <section className="py-3 px-2 h-100">
      <header className="d-flex align-items-center justify-content-between">
        <div>
          <h2 className="fs-4 fw-semibold pt-1">View Clients</h2>
          <Breadcrumb className="fs-small">
            <BreadcrumbItem>Client Master</BreadcrumbItem>
            <BreadcrumbItem active>View Client</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Button variant="">
          <VscBell />
        </Button>
      </header>
      <div
        className="bg-white py-3 rounded-2"
        style={{ boxShadow: '0px 1px 5px 0px #03003714' }}
      >
        <div className="px-4 mb-3 d-flex justify-content-between">
          <input
            type="text"
            placeholder="Search modules"
            className="w-100 px-3 py-2 rounded-pill border fs-small"
            style={{ maxWidth: '300px' }}
          />
          <div className="d-flex gap-2 align-items-center">
            <FormSelect className="fs-small">
              <option hidden>Columns</option>
              <option>Company Name</option>
              <option>Email Address</option>
              <option>Phone No.</option>
              <option>Contact Person</option>
            </FormSelect>
            <Button
              style={{
                color: '#153AC7',
                backgroundColor: '#E8EBF9'
              }}
              className="fw-semibold icon-btn"
              variant="light"
            >
              <FiDownload /> Export
            </Button>
          </div>
        </div>
        {clients.length && (
          <Table responsive className="border-light mb-0">
            <thead style={{ fontSize: '12px' }} className="bg-light">
              <tr className="border-top border-bottom">
                <td className="ps-4">Company Name</td>
                <td>Email Address</td>
                <td>Phone No.</td>
                <td>Contact Person</td>
                <td>Facilitator</td>
                <td>Sites</td>
                <td>Tenants</td>
                <td>Tenant Groups</td>
                <td className="pe-4">Actions</td>
              </tr>
            </thead>
            <tbody className="fs-small">
              {clients.map(client => (
                <tr key={client.id}>
                  <td className="ps-4">
                    <div className="d-flex align-items-center gap-2">
                      <div className="avatar-container">
                        <img
                          className="company-avatar"
                          src={client['company-logo']}
                        />
                      </div>
                      {client['company-name']}
                    </div>
                  </td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                  <td>{client['contact-person']}</td>
                  <td>{client.facilitator ? client.facilitator : '--'}</td>
                  <td>{client.sites ? client.sites : '--'}</td>
                  <td>{client.tenants ? client.tenants : '--'}</td>
                  <td>
                    {client['tenants-groups'] ? client['tenants-groups'] : '--'}
                  </td>
                  <td className="text-center pe-4">
                    <Dropdown>
                      <DropdownToggle
                        as={CustomToggle}
                        id="dropdown-custom-toggle"
                      />

                      <DropdownMenu
                        style={{ minWidth: '200px' }}
                        className="px-2 rounded-2 border"
                      >
                        <DropdownItem className="fs-small rounded-2 px-3 py-2 mb-1 d-flex align-items-center gap-2">
                          <VscEye stroke="#686687" /> View Details
                        </DropdownItem>
                        <DropdownItem className="fs-small rounded-2 px-3 py-2 mb-1 d-flex align-items-center gap-2">
                          <VscEdit stroke="#686687" /> Edit
                        </DropdownItem>
                        <DropdownItem className="fs-small rounded-2 px-3 py-2 mb-1 d-flex align-items-center gap-2">
                          <VscCircleSlash stroke="#686687" /> Block Access
                        </DropdownItem>
                        <DropdownItem className="fs-small rounded-2 px-3 py-2 d-flex align-items-center gap-2">
                          <VscTrash stroke="#686687" /> Delete
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        <div className="px-4 mt-3 d-flex justify-content-between flex-wrap">
          <Pagination className="mb-0">
            <Pagination.Item active>1</Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
            <Pagination.Item>3</Pagination.Item>
            <Pagination.Item>...</Pagination.Item>
            <Pagination.Item>48</Pagination.Item>
            <Pagination.Item>49</Pagination.Item>
            <Pagination.Item>50</Pagination.Item>
          </Pagination>

          <div className="d-flex align-items-center gap-2">
            <Button className="icon-btn" variant="">
              <VscChevronLeft /> Previous
            </Button>
            <Button className="icon-btn" variant="light">
              Next <VscChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewClient;
