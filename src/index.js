import angular from 'angular';
import 'angular-ui-router';

import routesConfig from './routes';
import {MovieService} from './app/services/movie-service';
import {dashboard} from './app/dashboard';

import './index.scss';

export const app = 'app';

angular
.module(app, ['ui.router'])
.config(routesConfig)
.factory('MovieService', MovieService)
.component('dashboard', dashboard);
