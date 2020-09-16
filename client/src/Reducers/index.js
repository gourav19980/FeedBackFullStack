import authReducers from './authReducers';
import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';
import surveyReducers from './surveyReducers';


export default combineReducers({
    auth:authReducers,
    form:reduxForm,
    surveys:surveyReducers
});