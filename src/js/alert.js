var alertwizContainerDiv = document.getElementsByClassName('alertwiz-container')[0];

function close() {
    alertwizContainerDiv.style.display = "none";
    alertwizContainerDiv.innerHTML = "";
}

export default (props,cb=()=>{})=>{
    const alertDiv = document.createElement('div');

    if(screen.width>411){
        alertDiv.setAttribute('style','width:40%;');
    }else{
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
        close();
        cb();
    });
    btn.innerHTML=props.accept || 'OK';

    const ButtonDiv = document.createElement('div');
    ButtonDiv.appendChild(btn);
    
    alertDiv.appendChild(titleDiv);
    alertDiv.appendChild(msgDiv);
    alertDiv.appendChild(ButtonDiv);

    alertwizContainerDiv.style.display = "grid";
    alertwizContainerDiv.append(alertDiv);
}