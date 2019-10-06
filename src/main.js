// //EXAMPLE CODE, REPLACE


import { Airkita } from './airkita.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import JustGage from 'justgage';

import * as url from '../images/akitamoods.png';
import * as barking_akita from '../images/barking_akita.png';
import * as pooping_akita from '../images/pooping_akita.png';
import * as alert_akita from '../images/alert_akita.png';

let alert_akita = {sx:400, sy:500, sWidth:800, sHeight:800};
let bark_akita = ;
//ctx.drawImage(img, 400, 500, 800, 800, 0, 0, 200, 200);
// let img = document.createElement('img');
// img.style = {
//   height: '25%',
//   width: '25'
// };


// img.src = url.default;
// console.log('imported', url);

// document.getElementById('test').appendChild(img);

let airkita = new Airkita();

var gauge = new JustGage({
  id: "gauge", // the id of the html element
  value: 0,
  min: 0,
  max: 1000,
  decimals: 2,
  gaugeWidthScale: 0.6
}); 

let img = new Image();
img.src = url.default;
img.onload = function() {
  init();
};

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

function init() {
  ctx.drawImage(img, 5100, 500, 1500, 700, 0, 0, 3600/9, 200);
}

$(document).ready(function() { 
  let promise = airkita.getData();
  promise.then(function(response) {
    const body = JSON.parse(response);
    console.log(body[0]);         
    gauge.refresh(body[0].value);
  });  

  setInterval(function() {
    let promise = airkita.getData();
    promise.then(function(response) {
      const body = JSON.parse(response);
      gauge.refresh(body[0].value)
    });
  },
  2000); 
});
