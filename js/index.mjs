// main module / entry point

import TMDBservice from "./services/TMDBservice.mjs";

const tmdbs = new TMDBservice()
tmdbs.get({url: '/movie/popular', method: 'GET', onSuccess: (data) => console.log(data)})


