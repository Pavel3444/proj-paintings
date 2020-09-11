import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordeon from "./modules/accordeon";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';


    modals();
    sliders('.feedback-slider-item', 'horisontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item',  'vertical');
    forms();
    mask('[name=phone]');
    checkTextInputs('[name=name]');
    checkTextInputs('[name=message]');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    pictureSize('.sizes-block');
    accordeon('.accordion-heading');
});