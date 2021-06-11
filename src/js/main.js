import Alert from './alert.js';
import Confirm from './confirm.js';
import Input from './input.js';
document.body.addEventListener('load',()=>{
    window.alertwiz = {};
    window.alertwiz = {Alert,Confirm,Input};
});