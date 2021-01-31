let chatWidgetSideText = document.querySelector('.chat-widget__side-text');
chatWidgetSideText.onclick = function () {
    let chatWidget = document.querySelector('.chat-widget');
    chatWidget.classList.add('chat-widget_active');
};

let chatWidgetInput = document.getElementById('chat-widget__input');
chatWidgetInput.onkeypress = function (e) {
    if (e.which == 13) {
        let time = new Date();
        let questionCustomer = chatWidgetInput.value;
        let robotAnswers = 
            ['Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
            'Кто тут?',
            'Где ваша совесть?',
            'К сожалению  все операторы сейчас заняты! Не пишите нам больше',
            'Добрый день! До свидания!',
            'Где ваша совесть?',
            'Мы ничего не будем вам продавать!',
            'Добрый день, мы ещё не проснулись. Позвоните через 10 лет' ],
            
            index = Math.floor(Math.random() * robotAnswers.length);
        if (questionCustomer != '') {
            let messages = document.querySelector('.chat-widget__messages');
            messages.innerHTML += `
                    <div class="message message_client">
                        <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
                        <div class="message__text">${questionCustomer}</div>
                    </div>
                    <div class="message">
                            <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
                            <div class="message__text">${robotAnswers[index]}</div>
                    </div>`;
        }
        chatWidgetInput.value = '';
    }
}