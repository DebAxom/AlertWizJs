# AlertWizJs
AlertWizJs is a library for creating custom popups in web.
## Docs:
### Include the following tags in the head tag

```html
<script src="https://debaxom.github.io/AlertWizJs/dist/script.js" async defer></script>
<link rel="stylesheet" href="https://debaxom.github.io/AlertWizJs/dist/style.css">
```
### Include this in the body tag (at the top level)

```html
<div class="alertwiz-container"></div>
```

### Open Custom AlertBox:

```javascript
window.alertwiz.Alert(props,callback);
/*
    props is an object:
        title: title to be displayed on the alert box.
        msg: msg to be displayed on the alert box.
        accept: text to be displayed on the button of the alertbox. (optional) (default:'OK')
    callback is optional
*/
```

### Open Custom ConfirmBox:

```javascript
window.alertwiz.Confirm(props,acceptFunction,declineFunction);
/*
    props is an object:
        title: title to be displayed on the confirm box.
        msg: msg to be displayed on the confirm box.
        accept: text to be displayed on the accept button of the confirmbox. (optional) (default:'Accept')
        decline: text to be displayed on the decline button of the confirmbox. (optional) (default:'Decline')
    acceptFunction executes if accept button is clicked
    declineFunction executes if decline button is clicked
*/
```

### Open Custom InputBox:

```javascript
window.alertwiz.Input(props,callback);
/*
    props is an object:
        title: title to be displayed on the input box.
        msg: msg to be displayed on the input box.
        ok: text to be displayed on the button of the alertbox. (optional)(default:'OK')
        inputType: Type of input (optional) (default:'text')
    callback is optional.
            Example: window.alertwiz.Input(props,res=>console.log(res)); // res is the input from the user.
*/
```
