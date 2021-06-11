function close() {
    var alertwizContainerDiv = document.getElementsByClassName('alertwiz-container')[0];
    alertwizContainerDiv.style.display = "none";
    alertwizContainerDiv.innerHTML = "";
}

export default (props,cb=()=>{})=>{
    var alertwizContainerDiv = document.getElementsByClassName('alertwiz-container')[0];
    
    const inputDiv = document.createElement('div');

    if(screen.width>411){
        inputDiv.setAttribute('style','width:40%;');
    }else{
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

    btn.innerHTML=props.ok || 'OK';
    const inputAndButtonContainer = document.createElement('div');
    inputAndButtonContainer.appendChild(inputTag);
    inputAndButtonContainer.appendChild(btn);

    inputDiv.appendChild(titleDiv);
    inputDiv.appendChild(msgDiv);
    inputDiv.appendChild(inputAndButtonContainer);

    alertwizContainerDiv.style.display = "grid";
    alertwizContainerDiv.append(inputDiv);
}