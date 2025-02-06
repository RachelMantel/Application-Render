const renderApi = require("@api/render-api");

renderApi.auth('rnd_Tjg4SCEzDpJOLERjyJy1Aw4GV5qU');
renderApi.listServices({includePreviews: 'true', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));