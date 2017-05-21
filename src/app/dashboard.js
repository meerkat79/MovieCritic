import {movieService} from './services/moviedb';

export const dashboard = {
  template: require('./dashboard.html'),
  controller() {
    this.hello = 'Welcome to MovieCritic!';
    this.dummyList = movieService;
  }
};
