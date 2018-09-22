import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
import Sort from './Sort';
import Payments from './Payments';

const Dashboard = () => {
  return (
    <div style={{ margin: '3em' }}>
      <Sort />
      <SurveyList />
      
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red pulse" style={{ margin: '0.5em'}}>
          <i className="large material-icons">add</i>
        </Link>
        <Payments />
      </div>
    </div>
  );
};

export default Dashboard;
