import * as constants from './constants';
import axios from 'axios';

const changeList = (data) => {
  return {
    type: constants.CHANGE_LIST,
    data
  }
}

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
	type: constants.SEARCH_BLUR
})


export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
    const data = res.data;
    dispatch(changeList(data.data));
    console.log(data);
    }).catch(() => {
      console.log('error');
    })
    
  }
}