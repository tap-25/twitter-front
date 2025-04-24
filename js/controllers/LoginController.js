class LoginController {
    container;

    constructor() {
        this.container = document.querySelector("#app");
    }

    init() {
        this.container.innerHTML = "";
        let loginView = new LoginView();
        this.container.innerHTML = loginView.render();
    }



}