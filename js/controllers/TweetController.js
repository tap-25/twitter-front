class TweetController {
    container;

    constructor(containerId, createTweetId, submitTweet) {
        this.container = document.querySelector(containerId);
        document.querySelector(createTweetId).addEventListener("click",() => {
            this.openNewTweet()
        });
        document.querySelector(submitTweet).addEventListener("click", () => {
            this.addTweet()
        });
        this.init();
    }

    async init() {
        let response = await fetch("https://65f2497c034bdbecc7648b04.mockapi.io/api/v1/products");
        let data = await response.json();
        for(let tweet of data) {
            this.container.innerHTML += new TweetView(tweet).render();
        }
    }

    openNewTweet() {
        console.log("Estou dentro do controller na funcao openNewTweet")
        $("#exampleModal").modal();
    }

    addTweet() {
        let content = document.querySelector("#message-text").value;
        let tweet =  {
            created_at: "2025-04-01T12:44:17.558Z",
            content: content,
            likes: 0,
            retweets: 0,
            comments: 0,
            username: "Diogo Soares",
            profile: "Diogo_a_Lendia",
            id: 1
        }
        this.container.innerHTML += new TweetView(tweet).render();
    }
}