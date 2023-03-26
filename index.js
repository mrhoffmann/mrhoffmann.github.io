const questions = new Selected();
const originalTopics = questions.topics;

const copy = () => {
    const textarea = document.createElement('textarea');
    textarea.value = document.getElementById('container').innerText;
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');
        questions.sendNotification('Kopierat.');
    } catch {
        //naj
    }
    document.body.removeChild(textarea);
};

const showModal = () => {
    document.getElementById("modal").classList.toggle("display");
    document.getElementById("jumpToNumber").value = "";
}

const jump = () => {
    showModal();
}

const setError = (error) => {
    document.getElementById("modal-error").innerHTML = error;
    document.getElementById("modal-error").classList.remove("display");
}

const jumpToTopic = () => {
    const num = Number(document.getElementById("jumpToNumber").value);
    if(num > 0 && num <= questions.length){
        questions.jumpToTopic(num);
        document.getElementById("modal-error").classList.add("display");
    }
    else{
        setError("Du måste ange en siffra mellan 1-"+questions.length);
    }
}

const unsafe_check = (event) => {
    questions.topics = event.checked ? originalTopics.concat(questions.sensitive_topics) : originalTopics;
    questions.nsfw = event.checked;
    if(event.checked){
        if(!questions.searching)
        {
            questions.counter = Math.floor(
                Math.random() * (questions.length - questions.shadowTopics.length)
            ) + questions.shadowTopics.length
        }
    } else {
        if(!questions.searching)
        {
            questions.randomize();
        }
    }
    if(questions.searching){
        questions.doFilterSearch(questions.searchWord);
    }
    questions.updateDisplay();
}

const clearSearch = () => {
    document.getElementById('filter').value = "";
    questions.doFilterSearch("");
}

questions.initializeComponent();