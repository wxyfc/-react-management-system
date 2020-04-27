import { createStore } from 'redux';
import handler from './handler';

const store = createStore (
    handler ,
);
export default store;