(function () {
    'use strict';

    var alertwizContainerDiv$2 = document.getElementsByClassName('alertwiz-container')[0];

    function close$2() {
        alertwizContainerDiv$2.style.display = "none";
        alertwizContainerDiv$2.innerHTML = "";
    }

    var Alert = (props,cb=()=>{})=>{
        const alertDiv = document.createElement('div');

        if(screen.width>411){
            alertDiv.setAttribute('style','width:40%;');
        }else {
            alertDiv.setAttribute('style','width:60%;');
        }

        alertDiv.classList.add('alertwiz-alert');

        const titleDiv = document.createElement('div');
        titleDiv.innerHTML=props.title;

        const msgDiv = document.createElement('div');
        msgDiv.innerHTML=props.msg;

        const btn = document.createElement('button');
        btn.setAttribute('style','background-color:#0099ff;');
        btn.classList.add('alertwiz-alert-btn');
        btn.addEventListener('click',()=>{
            close$2();
            cb();
        });
        btn.innerHTML=props.accept || 'Ok';

        const ButtonDiv = document.createElement('div');
        ButtonDiv.appendChild(btn);
        
        alertDiv.appendChild(titleDiv);
        alertDiv.appendChild(msgDiv);
        alertDiv.appendChild(ButtonDiv);

        alertwizContainerDiv$2.style.display = "grid";
        alertwizContainerDiv$2.append(alertDiv);
    };

    var alertwizContainerDiv$1 = document.getElementsByClassName('alertwiz-container')[0];

    function close$1() {
        alertwizContainerDiv$1.style.display = "none";
        alertwizContainerDiv$1.innerHTML = "";
    }

    var Confirm = (props,acceptEvent=()=>{},declineEvent=()=>{})=>{
        const confirmDiv = document.createElement('div');

        if(screen.width>411){
            confirmDiv.setAttribute('style','width:40%;');
        }else {
            confirmDiv.setAttribute('style','width:60%;');
        }

        confirmDiv.classList.add('alertwiz-confirm');

        const titleDiv = document.createElement('div');
        titleDiv.innerHTML=props.title;

        const msgDiv = document.createElement('div');
        msgDiv.innerHTML=props.msg;

        const acceptButton = document.createElement('button');
        acceptButton.setAttribute('style','background-color:#0099ff;');
        acceptButton.classList.add('alertwiz-confirm-accept');
        acceptButton.innerHTML=props.accept || 'Accept';
        acceptButton.addEventListener('click',()=>{
            acceptEvent();
            close$1();
        });

        const declineButton = document.createElement('button');
        declineButton.setAttribute('style','background-color:red;');
        declineButton.classList.add('alertwiz-confirm-decline');
        declineButton.innerHTML=props.decline || 'Decline';
        declineButton.addEventListener('click',()=>{
            declineEvent();
            close$1();
        });

        const ButtonDiv = document.createElement('div');
        ButtonDiv.appendChild(declineButton);
        ButtonDiv.appendChild(acceptButton);
        
        confirmDiv.appendChild(titleDiv);
        confirmDiv.appendChild(msgDiv);
        confirmDiv.appendChild(ButtonDiv);
        
        alertwizContainerDiv$1.style.display = "grid";
        alertwizContainerDiv$1.append(confirmDiv);
    };

    var alertwizContainerDiv = document.getElementsByClassName('alertwiz-container')[0];

    function close() {
        alertwizContainerDiv.style.display = "none";
        alertwizContainerDiv.innerHTML = "";
    }

    var Input = (props,cb=()=>{})=>{
        const inputDiv = document.createElement('div');

        if(screen.width>411){
            inputDiv.setAttribute('style','width:40%;');
        }else {
            inputDiv.setAttribute('style','width:60%;');
        }

        inputDiv.classList.add('alertwiz-input');

        const titleDiv = document.createElement('div');
        titleDiv.innerHTML=props.title;

        const msgDiv = document.createElement('div');
        msgDiv.innerHTML=props.msg;

        const inputTag = document.createElement('input');
        inputTag.setAttribute('type',props.inputType || 'text');
        inputTag.classList.add('alertwiz-input-input');

        const btn = document.createElement('button');
        btn.setAttribute('style','background-color:#0099ff;');
        btn.classList.add('alertwiz-input-btn');
        btn.addEventListener('click',()=>{
            close();
            cb(inputTag.value);
        });

        btn.innerHTML=props.accept || 'OK';
        const inputAndButtonContainer = document.createElement('div');
        inputAndButtonContainer.appendChild(inputTag);
        inputAndButtonContainer.appendChild(btn);

        inputDiv.appendChild(titleDiv);
        inputDiv.appendChild(msgDiv);
        inputDiv.appendChild(inputAndButtonContainer);

        alertwizContainerDiv.style.display = "grid";
        alertwizContainerDiv.append(inputDiv);
    };

    window.alertwiz = {};
    window.alertwiz = {Alert,Confirm,Input};

}());
