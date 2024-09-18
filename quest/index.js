const issues = document.querySelectorAll('.issue');
const inp = document.querySelectorAll('.inp');
const sendBtn = document.getElementById('send-button');

sendBtn.addEventListener('click', function (event) {
    inp.forEach((input, index) => {

        const issue = issues[index];
        
        if (input.value === '') {
            issue.style.display ='flex';
            input.classList.add('inp-error');
            event.preventDefault();
        }

        else{
            issue.style.display ='none';
            input.classList.add('inp-correct');
        }
    });
});