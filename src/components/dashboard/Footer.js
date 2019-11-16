import React from 'react';
import  '../../css/dashboard.css'

export default function Footer() {
 const toggleClass = (id) => {
    const oldClassName = document.getElementById(id).className;
    const newClassName = oldClassName === '' ? 'is-active' : '';
    document.getElementById(id).className = newClassName;
  };


  return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                © 2019, ICTLIFE
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <div className="logo">

                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}
