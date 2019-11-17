import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axiosConfig from '../config/axios';
import Intro from './Intro';
import { toastr } from 'react-redux-toastr';
import '../css/Home.css';

const Home = () => {

  const [values, setValues] = useState({
    email: '',
    subject: '',
    description: ''
  });

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const submitIssue = () => {
    axiosConfig
    .post('/issue_tracking/issues', {
      channel_id: 4,
      query_issue: values.subject,
      issue_details: values.description
    })
    .then((res) => {
      if (res) {
        toastr.success('Done', 'Your question has been received, you will get an aswer as soon as possible');
      }
    })
    .catch(() => {
      toastr.error('Something broke', 'Kindly try again later');
    });
  };

  const getSearchData = (searchData) => {
    setSearchTerm(searchData);
    axiosConfig
    .get(`/issue_tracking/issues?query=${searchData}&status=2`)
    .then((res) => {      
      if (res) {
        setData(res.data);
      }
    })
    .catch(() => {
    });
  }

 return (
  <main>
     <Intro IntroMessage="How can we be of help today?" getSearchData={getSearchData} />
     {
       searchTerm === '' ? (
        <div id="replacable-content">
        <section className="answer-options-div">
          <div className="community-div">
            <p>Knowledge Base</p>
            <span className="div-info">
              Our Knowledge Base is filled with informative articles
               to help you learn everything you need to know about SMS Leopard.
             </span>
             <Button variant="contained" color="primary">READ ARTICLES</Button>
          </div>
          <div className="knowledgebase-div">
            <p>Community</p>
            <span className="div-info">
            Contribute, ask questions, get answers, and learn 
            from other SMS leopard users in our Community Forum.
            </span>
            <Button variant="contained" color="primary">VIEW POSTS</Button>
          </div>
        </section>
        <section className="knowledge-base-section" id="knowledge-base">
          <p className="title">Knowledge Base</p>
          <span>Help resources to help you around SMS Leopard</span>
          <div className="knowledge-content">
            <div className="knowledge-card">
              How to perform an action
            </div>
            <div className="knowledge-card">
              How to top up
            </div>
            <div className="knowledge-card">
              How to solve an issue
            </div>
          </div>
        </section>
        </div>
       ) : (
        <section className="result-section">
          <span className="result-title">{`${data.length} result(s) for '${searchTerm}'`}</span>
          <div className="result-content">
            {
              data.map((result) => (
                <div className="result-card">
                  <span className="result-issue">{result.query_issue}</span>
                  <p>{result.action}</p>
                </div>
             ))
            }
          </div>
        </section>
       )
     }

     <section className="raise-issue-container" id="ask-quiz">
       <p className="title">Still stuck? Raise a question</p>
       <div>
       <form className="form-container" noValidate autoComplete="off">
          <TextField
            label="Your E-mail"
            value={values.email}
            onChange={handleChange('email')}
            className="text-field"
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Subject"
            className="text-field"
            onChange={handleChange('subject')}
            value={values.subject}
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Description"
            value={values.description}
            onChange={handleChange('description')}
            multiline
            rows="5"
            className="text-field"
            margin="normal"
            variant="outlined"
          />
          <Button variant="filled" onClick={() => submitIssue()}>
            Submit
          </Button>
    </form>
       </div>
     </section>
     <footer>
       © 2019
     </footer>
  </main>
 );
}

export default Home;
