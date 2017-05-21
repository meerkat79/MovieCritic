import angular from 'angular';
import 'angular-ui-router';

import routesConfig from './routes';
import {dashboard} from './app/dashboard';
import {movieService} from './app/services/moviedb';

import './index.scss';

export const app = 'app';

angular
.module(app, ['ui.router'])
.config(routesConfig)
.component('dashboard', dashboard)
.factory('movieService', movieService);
