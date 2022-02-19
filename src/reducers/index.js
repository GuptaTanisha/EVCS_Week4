import {combineReducers} from 'redux';
import stations from './stations';
import slots from './slots';
export default combineReducers({ stations: stations,slots: slots});