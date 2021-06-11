import Alert from './alert.js';
import Confirm from './confirm.js';
import Input from './input.js';
document.getElementsByTagName('body')[0].addEventListener('load',()=>{
    window.alertwiz = {};
    window.alertwiz = {Alert,Confirm,Input};
});