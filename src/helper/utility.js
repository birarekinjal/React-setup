/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-var */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable operator-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
/* eslint-disable import/extensions */
/* eslint-disable spaced-comment */
/* eslint-disable import/no-unresolved */
import moment from 'moment';


export const formateDateMonth = (date) => date && moment(date).format('MM-DD-YYYY');
export const formatDate = (date) => date && moment(date).format('Do MMM YYYY');
export const formatTime = (time) => time && moment(time).format('hh:mm A');
export const fromNow = (date) => moment(date).fromNow();

