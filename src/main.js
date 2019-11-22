/*jshint esversion: 8 */
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { MovieService } from './../src/movies.js';
import { GifService } from './../src/movies.js';

$(document).ready(function() {

  $('#movieButton').click(function() {
    $("#gifToDisplay").show();
    const movie = $('#location').val();
    $('#location').val("");

    (async () => {
      let movieService = new MovieService();
      const response = await movieService.getMovie(movie);
      getElements(response);
    })();

    function getElements(response) {
      $('#movieSpan').text(`${response.Title}`);
      $('#directorSpan').text(`${response.Director}`);
    }


    // setInterval (function() {
    //   $("#gifToDisplay").toggle();
    // },8000);


    (async () => {
      let gifService = new GifService();
      const gifResponse = await gifService.getGif(movie);
      getGifElements(gifResponse);
    })();

    function getGifElements(response) {
    $("#gif").attr("src", response.data.images.original.url);
    }

// START: Looping target opjects
// function getPatch(pubResponse) {
//   let arra = [];
//   for (i=0; i < pubResponse; i++){
//     ara.push(pubResponse[i].name);
//   }
//   let pubList = "<ul>";
//   for(var j = 0; arra.length; i++){
//     pubList += "<li>" + arra[j] + "</li>";
//     pubList +="</ul>";
//   }
//   $("#displayLocation").text(`"Heres a place to drin in ${city}, ${state}`);
//
// //   $("#pubGroup").append(pubList);
// // }
// END:

    // $("#gif").attr("src", movieApiCall(movie));


    console.log();

  });
});
