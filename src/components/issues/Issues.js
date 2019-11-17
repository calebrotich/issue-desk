import React, { useEffect } from 'react';
import DataTable from '../Table/DataTable';
import { connect } from 'react-redux';
import listIssues from '../../actions/listIssues';
import { withRouter } from 'react-router-dom';
import NavBar from "../dashboard/NavBar";
import SideBar from "../dashboard/SideBar";

const Issues = ({ history, listIssues, issues, match: { params: { status } } }) => {
  const status_id = (status === 'all' && 100) || (status === 'open' && 0) || (status === 'ongoing' && 1) || (status === 'resolved' && '2') || (status === 'followup' && '3');
  useEffect(() => listIssues(status_id), [listIssues, status_id]);

  const columns = [
    {
      name: 'query_issue',
      label: 'Query Issue'
    },
    {
      name: 'date_created',
      label: 'Date Created'
    },
    {
      name: 'customer_email',
      label: 'Customer phone/e-mail'
    },
    {
      name: 'channel_id',
      label: 'Channel'
    },
    {
      name: 'status_id',
      label: 'Status'
    },
    {
      name: 'action',
      label: 'Action'
    },
    {
      name: 'created_by',
      label: 'Created By'
    },
    {
      name: 'resolution',
      label: 'Edit'
    },
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
                <li>Issues</li>
                <li>{status}</li>
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
            {
              `${status} issue(s)`
            }
        </p>
    </header>
    <div className="card-content">
    {
      issues.success ? (
      <DataTable
      title="Issues"
      isAdmin={true}
      columns={columns}
      data={issues.issues}
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
  issues: state.issues,
});

export default connect(
  mapStateToProps,
  { listIssues },
)(withRouter(Issues));
