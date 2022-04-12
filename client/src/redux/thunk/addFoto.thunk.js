const download = require('downloadjs');

export const asyncAddPhoto = (form) => async (dispatch) => {
  console.log('formdata=>>>>>>>>>>>>>>>>>>>>>>>', form);
  await fetch('http://localhost:3001/upload', {
    method: 'POST',
    body: form,
    credentials: 'include',
  })
    .then((data) => data.blob())
    .then((data) => download(data));
};
