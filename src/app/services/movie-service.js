export const MovieService = [
  {title: 'Rambo', about: 'Action kick'},
  {title: 'Robin Hood', about: 'Adventure fantasy'},
  {title: 'Under Siege', about: 'Martial arts action'}
];

// export class MovieService {
//   constructor($http, $log) {
//     this.$http = $http;
//     this.$log = $log;
//     this.data = [];
//   }
//   getMovies() {
//     // $log.log('getMovies has fired');
//     return this.$http.get('http://beta.json-generator.com/Vyj4LGvaG')
//       .then(getMoviesSuccess)
//       .catch(getMoviesError);

//     function getMoviesSuccess(response) {
//       return response;
//     }

//     function getMoviesError(error) {
//       this.$log.error('XHR Failed for getAvengers.' + error.data);
//     }
//   }
// }
