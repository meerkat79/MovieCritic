export const movieService = [
  {title: 'Rambo', about: 'Action kick'},
  {title: 'Robin Hood', about: 'Adventure fantasy'},
  {title: 'Under Siege', about: 'Martial arts action'}
];

// export const movieService = ($http, $log) => {
//   this.$http = $http;
//   const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=22dccdd7';
//   function data() {
//     return $http
//     .get(API)
//     .then(response => {
//       return response.data;
//     }, reason => {
//       $log.warn(reason);
//     });
//   }
//   return {
//     data: this.data
//   };
// };
