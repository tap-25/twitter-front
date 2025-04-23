class LoginView {
    render() {
        return `
        <div class="container">
            <h2 id="titulo-form">Se identifique aqui :D</h2>
            <form>
                <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="ajudaEmail" placeholder="Seu email aqui">
                <small id="ajudaEmail" class="form-text text-muted">Precisamos dele para te identificar :D</small>
                </div>
                <div class="form-group">
                <label for="password">Senha</label>
                <input type="password" class="form-control" id="password" placeholder="Aquela secreta">
                </div>
                <button type="submit" class="btn btn-primary">Logar!</button>
            </form>
        </div>
        `;
    }
}