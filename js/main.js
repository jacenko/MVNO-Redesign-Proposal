// define contact box modal
var sly;

// focus on the Search textbox when loading page
$(window).load(function() {
  chooseSmartphone();
  $("#nav").load('./nav.php');
  $("#foot").load('./foot.php');
});

// prevent auto-scrolling to top when clicking a button
$(".btn").click(function (event) {
  event.preventDefault();
});

function topShift(){
  $(document).find('.top-shift').animate({ marginTop: '0px'}, 1000);
  $("#plan-buttons").css("visibility","visible");
}

function payReveal() {
  // var payg = document.getElementById("PAYG");
  // var month = document.getElementById("month");
  // var plans = document.getElementById("plans-info");
  // plans.style.display = "inline";
  // month.style.display = "none";
  // payg.style.display = "inline";

  $("#plans-info").css("display", "inline");
  $("#month").css("display", "none");
  $("#PAYG").css("display", "inline");

  $("#month-plan-button").addClass("btn-default");
  $("#month-plan-button").removeClass("btn-success");

  $("#payg-plan-button").addClass("btn-success");
  $("#payg-plan-button").removeClass("btn-default");
};

function monthReveal() {
  // var payg = document.getElementById("PAYG");
  // var month = document.getElementById("month");
  // var plans = document.getElementById("plans-info");
  // plans.style.display = "inline";
  // payg.style.display = "none";
  // month.style.display = "inline";

  $("#plans-info").css("display", "inline");
  $("#PAYG").css("display", "none");
  $("#month").css("display", "inline");

  $("#payg-plan-button").addClass("btn-default");
  $("#payg-plan-button").removeClass("btn-success");

  $("#month-plan-button").addClass("btn-success");
  $("#month-plan-button").removeClass("btn-default");
};

function choosePhone() {
  $("#choice-phone-button").addClass("btn-success");
  $("#choice-phone-button").removeClass("btn-primary");

  $("#choice-smartphone-button").addClass("btn-primary");
  $("#choice-smartphone-button").removeClass("btn-success");

  $("#choice-byop-button").addClass("btn-primary");
  $("#choice-byop-button").removeClass("btn-success");

  var defaultSection = document.getElementById("choose-default-section");
  var byopSection = document.getElementById("choose-byop-section");
  byopSection.style.display = "none";
  defaultSection.style.display = "inline";

  var choosephonesection = $('#choose-phone-section').html();
  $('#choose-default-section .frame .slidee').html(choosephonesection);
  sly.reload();

};

function chooseSmartphone() {
  $("#choice-smartphone-button").addClass("btn-success");
  $("#choice-smartphone-button").removeClass("btn-primary");

  $("#choice-phone-button").addClass("btn-primary");
  $("#choice-phone-button").removeClass("btn-success");

  $("#choice-byop-button").addClass("btn-primary");
  $("#choice-byop-button").removeClass("btn-success");

  var defaultSection = document.getElementById("choose-default-section");
  var byopSection = document.getElementById("choose-byop-section");
  byopSection.style.display = "none";
  defaultSection.style.display = "inline";

  var choosesmartphonesection = $('#choose-smartphone-section').html();
  $('#choose-default-section .frame .slidee').html(choosesmartphonesection);
  sly.reload();
};

function chooseBYOP() {
  $("#choice-byop-button").addClass("btn-success");
  $("#choice-byop-button").removeClass("btn-primary");

  $("#choice-smartphone-button").addClass("btn-primary");
  $("#choice-smartphone-button").removeClass("btn-success");

  $("#choice-phone-button").addClass("btn-primary");
  $("#choice-phone-button").removeClass("btn-success");

  var defaultSection = document.getElementById("choose-default-section");
  var byopSection = document.getElementById("choose-byop-section");
  defaultSection.style.display = "none";
  byopSection.style.display = "inline-block";
};

function byopSelectPhone() {
  var byopPhone = document.getElementById("byop-phone");
  var byopSmart = document.getElementById("byop-smart");

  $(byopPhone).addClass("active");
  $(byopSmart).removeClass("active");

  topShift();
};

function selectPlan(plan) {
  plan.classList.toggle('selected-plan');
  $(plan).find('.checked').toggleClass('appear');
}

function byopSelectSmartphone() {
  var byopPhone = document.getElementById("byop-phone");
  var byopSmart = document.getElementById("byop-smart");

  $(byopSmart).addClass("active");
  $(byopPhone).removeClass("active");

  topShift();
};

// Sly scroll settings for phone selection
$(function () {
  'use strict';

  var frame = $("#choose-default-section .frame");

  sly = new Sly(frame, {
    horizontal: 1,

    itemNav: 'centered',
    smart: 1,
    activateOn: 'click',

    scrollBy: 1,

    mouseDragging: 1,
    swingSpeed: 0.2,

    scrollBar: $('.scrollbar'),
    dragHandle: 1,

    speed: 500
  }).init();

  $(window).on('resize', function () {
    sly.reload();
  });

  sly.on('active', function(eventName){
    topShift();
  });


});

// show scroll-to-top button when scrolling 150px from top
$(function(){

  $(document).on( 'scroll', function(){

    if ($(window).scrollTop() > 200) {
      $('#scroll-to-top').addClass('show');
    } else {
      $('#scroll-to-top').removeClass('show');
    }
  });
});
