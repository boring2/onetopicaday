import { reducer } from '../reducers/reduce';
import { createStore } from 'redux';



export const store = createStore(reducer, {ideas: ['aaa', 'bbbb']});

