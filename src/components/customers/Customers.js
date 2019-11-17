import React, { useEffect } from 'react';
import DataTable from '../Table/UsersDataTable';
import { connect } from 'react-redux';
import listCustomers from '../../actions/listCustomers';
import { withRouter } from 'react-router-dom';
import NavBar from "../dashboard/NavBar";
import SideBar from "../dashboard/SideBar";

const Customers = ({ history, listCustomers, customers, match: { params: { status } } }) => {
  useEffect(() => listCustomers(), [listCustomers]);

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

  console.log(customers);

  return (
    <div id="app">
      <NavBar/>
      <SideBar/> 
      <section className="section is-title-bar">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <ul>
                <li>Customers</li>
                <li>View Customers</li>
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
            All Customers
        </p>
        <button class="button is-primary" onClick={() => history.push('/customers/create')}>
            <span class="icon is-small">
            <i class="mdi mdi-plus"></i>
            </span>
            <span>Add New Customer</span>
        </button>
    </header>
    <div className="card-content">
    {
      customers.success ? (
      <DataTable
      title="Customers"
      isAdmin={true}
      columns={columns}
      data={customers.customers}
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
  customers: state.customers,
});

export default connect(
  mapStateToProps,
  { listCustomers },
)(withRouter(Customers));
