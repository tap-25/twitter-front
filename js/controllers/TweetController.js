class TweetController {
    container;

    constructor(containerId) {
        this.container = document.querySelector(containerId);
        this.container.innerHTML = "";
        this.init();
        this.bind();
    }

    async init() {
        let response = await fetch("https://65f2497c034bdbecc7648b04.mockapi.io/api/v1/products");
        let data = await response.json();
        for(let tweet of data) {
            this.container.innerHTML += new TweetView(tweet).render();
        }
    }

    bind() {
        document.querySelector("#new-tweet").addEventListener("click", () => {
            this.goToLogin();
        })
    }

    goToLogin() {
        console.log("goToLogin");
        new MainController("#app");
    }
}