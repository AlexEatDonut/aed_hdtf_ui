let menu_button = document.querySelectorAll(
  ".selection, .return, .option_tab--off, .option_tab--on"
);
let snd_hover = document.querySelector("#snd_hover");
let snd_click = document.querySelector("#snd_click");
let logo = document.querySelector("#gamelogo");
let menu_main = document.querySelector("#main_menu");
let menu_play = document.querySelector("#play_menu");
let menu_mode = document.querySelector("#mode_menu");
let menu_save = document.querySelector("#save_menu");
let quit_prompt = document.querySelector("#quit_prompt");
let menu_option = document.querySelector("#option_menu");
let menu_option_control = document.querySelector("#option_controls");
let menu_option_graphics = document.querySelector("#option_graphics");
let menu_option_audio = document.querySelector("#option_audio");
let menu_option_accessibility = document.querySelector("#option_accessibility");
let menu_option_advanced = document.querySelector("#option_advanced");
let centered_items = document.querySelector(".centeredMenu");
let backMain = document.querySelectorAll("#backMain");
let save_button = document.querySelectorAll("#save_button");
let play_button = document.querySelectorAll("#play_button");
let mode_button = document.querySelectorAll("#mode_button");
let quit_button = document.querySelector("#quit_button");
let option_button = document.querySelectorAll("#option_button");
let option_button_controls = document.querySelector("#option_button-controls");
let option_button_graphics = document.querySelector("#option_button-graphics");
let option_button_audio = document.querySelector("#option_button-audio");
let option_button_accessibility = document.querySelector(
  "#option_button-accessibility"
);
let option_button_advanced = document.querySelector("#option_button-advanced");

function f_main_menu() {
  menu_play.classList.add("d-none");
  menu_main.classList.remove("d-none");
  logo.classList.remove("d-none");
  menu_save.classList.add("d-none");
  menu_option.classList.add("d-none");
  centered_items.classList.add("d-none");
  console.log("open main menu");
}
function f_quit_prompt() {
  logo.classList.remove("d-none");
  quit_prompt.classList.remove("d-none");
  menu_play.classList.add("d-none");
  menu_main.classList.add("d-none");
  menu_save.classList.add("d-none");
  menu_option.classList.add("d-none");
  centered_items.classList.remove("d-none");
  console.log("open main menu");
}

function f_play_menu() {
  logo.classList.remove("d-none");
  menu_main.classList.add("d-none");
  menu_play.classList.remove("d-none");
  menu_mode.classList.add("d-none");
  menu_save.classList.add("d-none");
  menu_option.classList.remove("d-none");
  centered_items.classList.add("d-none");
  console.log("open play menu");
}
function f_mode_menu() {
  logo.classList.remove("d-none");
  menu_main.classList.add("d-none");
  menu_play.classList.add("d-none");
  menu_mode.classList.remove("d-none");
  menu_save.classList.add("d-none");
  menu_option.classList.add("d-none");
  centered_items.classList.add("d-none");
  console.log("open play menu");
}
function f_save_menu() {
  logo.classList.add("d-none");
  menu_main.classList.add("d-none");
  menu_play.classList.add("d-none");
  menu_save.classList.remove("d-none");
  menu_option.classList.add("d-none");
  centered_items.classList.remove("d-none");
  console.log("open save menu");
}
function f_option_menu() {
  logo.classList.add("d-none");
  menu_main.classList.add("d-none");
  menu_play.classList.add("d-none");
  menu_save.classList.add("d-none");
  menu_option.classList.remove("d-none");
  centered_items.classList.remove("d-none");
  console.log("open option menu");
}
function f_option_controls() {
  logo.classList.add("d-none");
  menu_option_control.classList.remove("d-none");
  option_button_controls.classList.add("option_tab--on");
  option_button_controls.classList.remove("option_tab--off");

  menu_option_graphics.classList.add("d-none");
  option_button_graphics.classList.remove("option_tab--on");
  option_button_graphics.classList.add("option_tab--off");

  menu_option_audio.classList.add("d-none");
  option_button_audio.classList.remove("option_tab--on");
  option_button_audio.classList.add("option_tab--off");

  menu_option_accessibility.classList.add("d-none");
  option_button_accessibility.classList.remove("option_tab--on");
  option_button_accessibility.classList.add("option_tab--off");

  menu_option_advanced.classList.add("d-none");
  option_button_advanced.classList.remove("option_tab--on");
  option_button_advanced.classList.add("option_tab--off");

  centered_items.classList.remove("d-none");
  console.log("open controls option menu");
}
function f_option_graphics() {
  logo.classList.add("d-none");
  menu_option_control.classList.add("d-none");
  option_button_controls.classList.remove("option_tab--on");
  option_button_controls.classList.add("option_tab--off");

  menu_option_graphics.classList.remove("d-none");
  option_button_graphics.classList.add("option_tab--on");
  option_button_graphics.classList.remove("option_tab--off");

  menu_option_audio.classList.add("d-none");
  option_button_audio.classList.remove("option_tab--on");
  option_button_audio.classList.add("option_tab--off");

  menu_option_accessibility.classList.add("d-none");
  option_button_accessibility.classList.remove("option_tab--on");
  option_button_accessibility.classList.add("option_tab--off");

  menu_option_advanced.classList.add("d-none");
  option_button_advanced.classList.remove("option_tab--on");
  option_button_advanced.classList.add("option_tab--off");

  centered_items.classList.remove("d-none");

  console.log("open graphics option menu");
}
function f_option_audio() {
  logo.classList.add("d-none");
  menu_option_control.classList.add("d-none");
  option_button_controls.classList.remove("option_tab--on");
  option_button_controls.classList.add("option_tab--off");

  menu_option_graphics.classList.add("d-none");
  option_button_graphics.classList.remove("option_tab--on");
  option_button_graphics.classList.add("option_tab--off");

  menu_option_audio.classList.remove("d-none");
  option_button_audio.classList.add("option_tab--on");
  option_button_audio.classList.remove("option_tab--off");

  menu_option_accessibility.classList.add("d-none");
  option_button_accessibility.classList.remove("option_tab--on");
  option_button_accessibility.classList.add("option_tab--off");

  menu_option_advanced.classList.add("d-none");
  option_button_advanced.classList.remove("option_tab--on");
  option_button_advanced.classList.add("option_tab--off");

  centered_items.classList.remove("d-none");

  console.log("open audio option menu");
}
function f_option_accessibility() {
  logo.classList.add("d-none");
  menu_option_control.classList.add("d-none");
  option_button_controls.classList.remove("option_tab--on");
  option_button_controls.classList.add("option_tab--off");

  menu_option_graphics.classList.add("d-none");
  option_button_graphics.classList.remove("option_tab--on");
  option_button_graphics.classList.add("option_tab--off");

  menu_option_audio.classList.add("d-none");
  option_button_audio.classList.remove("option_tab--on");
  option_button_audio.classList.add("option_tab--off");

  menu_option_accessibility.classList.remove("d-none");
  option_button_accessibility.classList.add("option_tab--on");
  option_button_accessibility.classList.remove("option_tab--off");

  menu_option_advanced.classList.add("d-none");
  option_button_advanced.classList.remove("option_tab--on");
  option_button_advanced.classList.add("option_tab--off");

  centered_items.classList.remove("d-none");
  console.log("open accessibility option menu");
}

function f_option_advanced() {
  logo.classList.add("d-none");
  menu_option_control.classList.add("d-none");
  option_button_controls.classList.remove("option_tab--on");
  option_button_controls.classList.add("option_tab--off");

  menu_option_graphics.classList.add("d-none");
  option_button_graphics.classList.remove("option_tab--on");
  option_button_graphics.classList.add("option_tab--off");

  menu_option_audio.classList.add("d-none");
  option_button_audio.classList.remove("option_tab--on");
  option_button_audio.classList.add("option_tab--off");

  menu_option_accessibility.classList.add("d-none");
  option_button_accessibility.classList.remove("option_tab--on");
  option_button_accessibility.classList.add("option_tab--off");

  menu_option_advanced.classList.remove("d-none");
  option_button_advanced.classList.add("option_tab--on");
  option_button_advanced.classList.remove("option_tab--off");

  centered_items.classList.remove("d-none");
  console.log("open advanced option menu");
}

backMain.forEach((item) => {
  item.addEventListener("click", function () {
    f_main_menu();
  });
});
play_button.forEach((item) => {
  item.addEventListener("click", function () {
    f_play_menu();
  });
});
mode_button.forEach((item) => {
  item.addEventListener("click", function () {
    f_mode_menu();
  });
});
save_button.forEach((item) => {
  item.addEventListener("click", function () {
    f_save_menu();
  });
});

quit_button.addEventListener("click", function () {
  f_quit_prompt();
});

option_button.forEach((item) => {
  item.addEventListener("click", function () {
    f_option_menu();
  });
});

option_button_controls.addEventListener("click", function () {
  f_option_controls();
});

option_button_graphics.addEventListener("click", function () {
  f_option_graphics();
});
option_button_audio.addEventListener("click", function () {
  f_option_audio();
});
option_button_accessibility.addEventListener("click", function () {
  f_option_accessibility();
});
option_button_advanced.addEventListener("click", function () {
  f_option_advanced();
});

menu_button.forEach((item) => {
  item.addEventListener("mouseover", (event) => {
    snd_hover.play();
  });
});
menu_button.forEach((item) => {
  item.addEventListener("click", (event) => {
    snd_click.play();
  });
});

window.addEventListener("DOMContentLoaded", (event) => {
  f_main_menu();
});
