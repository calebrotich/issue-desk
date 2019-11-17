import React, { useEffect } from 'react';
import DataTable from '../Table/UsersDataTable';
import { connect } from 'react-redux';
import listUsers from '../../actions/listUsers';
import { withRouter } from 'react-router-dom';
import NavBar from "../dashboard/NavBar";
import SideBar from "../dashboard/SideBar";

const Users = ({ history, listUsers, users, match: { params: { status } } }) => {
  useEffect(() => listUsers(), [listUsers]);

  const columns = [
    {
      name: 'name',
      label: 'Customer Name'
    },
    {
      name: 'date_created',
      label: 'Date Created'
    },
    {
      name: 'phone',
      label: 'Phone'
    },
    {
      name: 'email',
      label: 'E-mail'
    },
    {
      name: 'type',
      label: 'User Type'
    }
  ];

  return (
    <div id="app">
      <NavBar/>
      <SideBar/> 
      <section className="section is-title-bar">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <ul>
                <li>Users</li>
                <li>View users</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

<section className="section is-main-section">
  <div className="card">
    <header className="card-header">
        <p className="card-header-title">
            <span className="icon"><i className="mdi mdi-ballot"></i></span>
            All users
        </p>
        <button class="button is-success" onClick={() => history.push('/users/create')}>
            <span class="icon is-small">
            <i class="mdi mdi-plus"></i>
            </span>
            <span>Add CX Member</span>
        </button>
    </header>
    <div className="card-content">
    {
      users.success ? (
      <DataTable
      title="Customers"
      isAdmin={true}
      columns={columns}
      data={users.users}
      onRowClick={(rowId) => {
    }}
    />
    ) : (null)
    } 
    </div>
  </div>
</section>

    </div>
  );
}

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(
  mapStateToProps,
  { listUsers },
)(withRouter(Users));
