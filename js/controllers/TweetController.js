class TweetController {
    container;

    constructor() {
        this.container = document.querySelector("#app");
    }

    async init() {
        this.container.innerHTML = "";
        let response = await fetch("https://65f2497c034bdbecc7648b04.mockapi.io/api/v1/products");
        let data = await response.json();
        for(let tweet of data) {
            this.container.innerHTML += new TweetView(tweet).render();
        }
        this.bind();
    }

    bind() {
    }

    goToLogin() {
    }
}