class MainController {
    container;

    constructor(containerId) {
        this.container = document.querySelector(containerId);
        this.container.innerHTML = "";
        let loginView = new LoginView();
        this.container.innerHTML = loginView.render();
        this.bind();
    }

    bind() {
        document.querySelector("#new-tweet").addEventListener("click", () => {
            this.goToTweets();
        })
    }

    goToTweets() {
        console.log("goToTweets");
        new TweetController("#app")
    }
}