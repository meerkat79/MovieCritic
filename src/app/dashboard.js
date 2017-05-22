import {MovieService} from './services/movie-service';

export const dashboard = {
  template: require('./dashboard.html'),
  controller($log) {
    this.$log = $log;
    this.hello = 'Welcome to MovieCritic!';
    this.dummyList = MovieService;
    $log.log(this.dummyList, 'our movies here');
  }
};
