function close() {
    var alertwizContainerDiv = document.getElementsByClassName('alertwiz-container')[0];
    alertwizContainerDiv.style.display = "none";
    alertwizContainerDiv.innerHTML = "";
}

export default (props,acceptEvent=()=>{},declineEvent=()=>{})=>{
    var alertwizContainerDiv = document.getElementsByClassName('alertwiz-container')[0];

    const confirmDiv = document.createElement('div');

    if(screen.width>411){
        confirmDiv.setAttribute('style','width:40%;');
    }else{
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
        close();
    });

    const declineButton = document.createElement('button');
    declineButton.setAttribute('style','background-color:red;');
    declineButton.classList.add('alertwiz-confirm-decline');
    declineButton.innerHTML=props.decline || 'Decline';
    declineButton.addEventListener('click',()=>{
        declineEvent();
        close();
    });

    const ButtonDiv = document.createElement('div');
    ButtonDiv.appendChild(declineButton);
    ButtonDiv.appendChild(acceptButton);
    
    confirmDiv.appendChild(titleDiv);
    confirmDiv.appendChild(msgDiv);
    confirmDiv.appendChild(ButtonDiv);
    
    alertwizContainerDiv.style.display = "grid";
    alertwizContainerDiv.append(confirmDiv);
}