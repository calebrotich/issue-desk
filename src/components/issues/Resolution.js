import React from 'react';
import  '../../css/dashboard.css'
import NavBar from "../dashboard/NavBar";
import SideBar from "../dashboard/SideBar";
import {dashboardService} from "../../actions/dashboardService";
import {issuesService} from "../../actions/issuesService";

class Resolution extends React.Component {

  componentDidMount() {
    //    this.loadPage();
    this.onLoad();

  }
  componentDidUpdate(nextProps) {
      this.onLoad();

  }


 onLoad(){
    if(this.props.issue===0){
    }else{

      document.getElementById('sample-modal').classList.add('is-active');

    }

 }
  handleSubmit = event => {
    const data = this.state;
    if(data!=null) {
        //  console.log(this.state);
        data.issue_id = this.props.issue;
        data.cx_member_id = 1;
        data.status_id =parseInt(data.status_id);
        if(isNaN(data.status_id)){
            data.status_id =2;
        }
        document.getElementById('sample-modal').classList.remove('is-active');
        issuesService.createResolution(data);
    }else{
        document.getElementById('resolution').classList.add('is-danger');
        document.getElementById('resolution_text').classList.add('is-danger');
        document.getElementById('resolution_text').textContent = 'Resolution Required';
    }
  };
  handleClose = event => {
    document.getElementById('sample-modal').classList.remove('is-active');
  };
  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }


  render() {
    return (
        <div id="sample-modal" className="modal">
          <div className="modal-background jb-modal-close"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Confirm action {this.props.issue}</p>
              <button className="delete jb-modal-close" aria-label="close" onClick={(event) => this.handleClose(event)}></button>
            </header>

            <section className="modal-card-body">
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                </div>
                <div className="field-body">
                  <div className="field">
                    <p>{this.props.row.issue_details}</p>
                  </div>

                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Resolution</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control is-expanded has-icons-left">
                         <textarea className="textarea"
                                   placeholder="Resolution" onChange={e => this.onChange(e)} name="resolution"  id="resolution"></textarea>
                        <p id="resolution_text" className="help">Required</p>
                    </p>
                  </div>

                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Status</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select onChange={e => this.onChange(e)}   name="status_id" >
                          <option value="2">Status</option>
                          <option value="0">Open</option>
                          <option value="1">Ongoing</option>
                          <option value="2">Resolved</option>
                          <option value="3">Follow Up Required</option>
                        </select>
                      </div>
                    </div>
                  </div>

                </div>
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
export default Resolution;
