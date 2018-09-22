import axios from 'axios';
import {
  FETCH_USER,
  FETCH_SURVEYS,
  DELETE_SURVEY,
  SORT_SURVEYS
} from './types';

// when an action go through redux-thunk, if it see a function is returned, it calls that function right away
// with dispatch function as param
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
}

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
}

export const deleteSurvey = surveyId => async dispatch => {
  await axios.delete(`/api/surveys/delete/${surveyId}`);

  dispatch({ type: DELETE_SURVEY, payload: surveyId });
}

export const sortSurvey = (sortProperty, sortType) => dispatch => {
  dispatch({
    type: SORT_SURVEYS,
    payload: {
      sortProperty,
      sortType
    }
  });
}
