// https://www.patterns.dev/vanilla/singleton-pattern/

class Router {
    routes;

    constructor() {
        this.routes = {
            home: {
                path: "/index.html", 
                controller: new TweetController()
            },
            login: {
                path: "/login.html",
                controller: new LoginController()
            }
        }
    }

    goTo(route) {
        window.history.pushState({}, "", route.path)
        route.controller.init();
    }

    goToLogin() {
        this.goTo(this.routes.login)
    }

    goToHome() {
        this.goTo(this.routes.home)
    }
}