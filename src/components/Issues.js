import React, { useEffect } from 'react';
import DataTable from './Table/DataTable';
import { connect } from 'react-redux';
import listIssues from '../actions/listIssues';
import { withRouter } from 'react-router-dom';

const Issues = ({ history, listIssues, issues }) => {
  useEffect(() => listIssues(), [listIssues]);

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
      name: 'customer_id',
      label: 'Customer'
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
  ];

  return (
  <section>
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

  </section>
  );
}

const mapStateToProps = state => ({
  issues: state.issues,
});

export default connect(
  mapStateToProps,
  { listIssues },
)(withRouter(Issues));
