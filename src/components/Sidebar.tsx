import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="py-3 px-3 flex-grow-1">
      <h2 className="fs-5 fw-semibold my-2">Company Name</h2>
      <input
        type="text"
        placeholder="Search modules"
        className="fs-small w-100 mt-3 mb-3 px-3 py-2 rounded-pill border"
      />
      <p
        className="text-uppercase fs-small fw-semibold mb-2"
        style={{ color: '#B8BABC' }}
      >
        Client Master
      </p>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        <li className="mb-2">
          <NavLink to="/admin/view-clients">
            {({ isActive }) => (
              <Button
                className="w-100 text-start"
                variant={isActive ? 'primary' : ''}
              >
                View Clients
              </Button>
            )}
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink to="/admin/add-client">
            {({ isActive }) => (
              <Button
                className="w-100 text-start"
                variant={isActive ? 'primary' : ''}
              >
                Add Client
              </Button>
            )}
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
