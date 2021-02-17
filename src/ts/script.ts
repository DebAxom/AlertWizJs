var popUp = {
    close:function(callback=function(res){},con=false){
        document.querySelector('div[popup="container"]').style.display="none";
        let res;
        if(con){
            res = document.querySelector('input[popup="textbox"]').value;
        }else{
            res = '';
        }
        callback(res);
        document.querySelector('div[popup="container"]').innerHTML="";
    },
    alert:function(props,callback){
        document.querySelector('div[popup="container"]').innerHTML=`
        <div popup="alert">
            <div>${props.title}</div>
            <div>${props.msg}</div>
            <div>
                <button popup="alert-button" style="background-color:#0099ff;" onclick="popUp.close(${callback})">${props.accept || 'Ok'}</button>
            </div>
        </div>`;
        document.querySelector('div[popup="container"]').style.display="grid";
    },
    confirm:function(props,accept,decline){
        document.querySelector('div[popup="container"]').innerHTML=`
        <div popup="confirm">
            <div>${props.title}</div>
            <div>${props.msg}</div>
            <div>
                <button popup="confirm-decline" style="background-color:red;" onclick="popUp.close(${decline})">${props.decline || 'No'}</button>
                <button popup="confirm-accept" style="background-color:#0099ff;" onclick="popUp.close(${accept})">${props.accept || 'Yes'}</button>
            </div>
        </div>`;
        document.querySelector('div[popup="container"]').style.display="grid";
    },
    input:function(props,callback){
        document.querySelector('div[popup="container"]').innerHTML=`
        <div popup="input">
            <div>${props.title}</div>
            <div>${props.msg}</div>
            <div>
                <input type="text" popup="textbox">
                <button popup="input-button" style="background-color:#0099ff;" onclick="popUp.close(${callback},true)">${props.submit || 'Submit'}</button>
            </div>
        </div>`;
        document.querySelector('div[popup="container"]').style.display="grid";
    }
}