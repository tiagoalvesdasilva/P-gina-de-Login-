let validator_1 = {
    handleSubimit: (Event)=>{
        Event.preventDefault();
        let send = true;
        
        let inputs = form.querySelectorAll('input');

        for(let i=0; i<inputs.length; i++){
            let input = inputs[i];
            console.log(input)
        }

        send = false;
        if(send){
            form.submit();
        }
    }
}

let form = document.querySelector('.validator_1');
form.addEventListener('submit', validator_1.handleSubimit)