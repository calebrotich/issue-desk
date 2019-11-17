import React from 'react';
import  '../../css/dashboard.css'
import {issuesService} from "../../actions/issuesService";

class EditIssue extends React.Component {

  componentDidMount() {
    //    this.loadPage();
    this.onLoad();

  }
  componentDidUpdate(nextProps) {
      this.onLoad();

  }


 onLoad(){
    if(this.props.issue===0){
//console.log(this.props.issue);
    }else{

      document.getElementById('edit-modal').classList.add('is-active');

    }

 }
    handleSubmit = () => {
        // this.setState(this.props.row) ;
        const data = this.state;
        if (data != null) {

        data.id = this.props.row.id;
        data.channel_id = parseInt(data.channel_id);
        data.assigned_to = parseInt(data.assigned_to);
        data.status_id = parseInt(data.status_id);
         issuesService.editIssue(data);
    }else {
            const data =this.props.row ;
            data.channel_id = parseInt(data.channel_id);
            data.assigned_to = parseInt(data.assigned_to);
            data.status_id = parseInt(data.status_id);
             issuesService.editIssue(data);
        }
    };
  handleClose = event => {
    document.getElementById('edit-modal').classList.remove('is-active');
  };
  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }


  render() {
    return (
        <div id="edit-modal" className="modal">
          <div className="modal-background jb-modal-close"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Edit Issue {this.props.issue}</p>
              <button className="delete jb-modal-close" aria-label="close" onClick={(event) => this.handleClose(event)}></button>
            </header>

            <section className="modal-card-body">
                <div className="card-content">
                    <form>
                        <div className="field is-horizontal">
                            <div className="field-body">
                                <div className="field is-horizontal">
                                    <div className="field-label is-normal">
                                        <label className="label">Customer phone/e-mail</label>
                                    </div>
                                    <div className="field-body">
                                        <div className="field">
                                            <p className="control is-expanded has-icons-left">
                                                <input className="input" type="text" required name="customer_email" value={this.props.row.customer_email} placeholder="Enter your e-mail / phone" onChange={e => this.onChange(e)}  />
                                                <span className="icon is-small is-left"><i
                                                    className="mdi mdi-mail"></i></span>
                                            </p>
                                        </div>
                                        <div className="field">
                                            <div className="control">
                                                <div className="select is-fullwidth">
                                                    <select value={this.props.row.status_id} onChange={e => this.onChange(e)} name="status_id" >
                                                        <option >--Issue Status--</option>
                                                        <option value="0">Open</option>
                                                        <option value="1">Ongoing</option>
                                                        <option value="2">Resolved</option>
                                                        <option value="3">Follow up required</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Query Issue</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <p className="control is-expanded has-icons-left">
                                        <input className="input" type="text" name="query_issue" placeholder="Query Issue" value={this.props.row.query_issue} onChange={e => this.onChange(e)}  />
                                        <span className="icon is-small is-left"><i
                                            className="mdi mdi-mail"></i></span>
                                    </p>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <div className="select is-fullwidth">
                                            <select value={this.props.row.channel_id} onChange={e => this.onChange(e)} name="channel_id" >
                                                <option>--Select channel--</option>
                                                <option value="1">Chat</option>
                                                <option value="2">Email</option>
                                                <option value="3">Call</option>
                                                <option value="4">Social Media</option>
                                                <option value="5">Issue Desk</option>
                                                <option value="6">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <hr></hr>
                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Issues Details</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <div className="control">
                                              <textarea className="textarea"
                                                        placeholder="Explain how we can help you" value={this.props.row.issue_details}  onChange={e => this.onChange(e)} name="issue_details"  ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Action</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <div className="control">
                                              <textarea className="textarea"
                                                        placeholder="Advice given to the user at the moment" value={this.props.row.action} onChange={e => this.onChange(e)} name="action" ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="field is-horizontal">
                            <div  style={{display: 'none'}}>
                                <div className="field">
                                    <div className="control">
                                        <div className="select is-fullwidth">
                                            <select onChange={e => this.onChange(e)} name="created_by" >
                                                <option>Created By B</option>
                                                <option value="CX_TEAM">CX TEAM</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="field-body">
                                <div className="field is-horizontal">
                                    <div className="field-label is-normal">
                                        <label className="label">Assigned to</label>
                                    </div>
                                    <div className="field-body">
                                        <div className="field">
                                            <div className="control">
                                                <div className="select is-fullwidth">
                                                    <select name="assigned_to" value={this.props.row.assigned_to} onChange={e => this.onChange(e)} >
                                                        <option value={JSON.parse(localStorage.userObject).id}>{localStorage.fullname}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <div className="modal-card-foot">
              <button className="button jb-modal-close" onClick={(event) => this.handleClose(event)} >Cancel</button>
              <button className="button is-primary jb-modal-close" onClick={() => this.handleSubmit()} >Submit</button>
            </div>
          </div>
          <button className="modal-close is-large jb-modal-close"  onClick={(event) => this.handleClose(event)}></button>
        </div>

    );
  };
}
export default EditIssue;
