import React from 'react'

const Login = props => {
    return (
        <div>
            <div className="container">
                <div className="row main">
                    <div className="panel-heading">
                        <div className="panel-title text-center">
                            <h1 className="title">Login</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="main-login main-center">
                        <form className="form-horizontal" method="post" action="#">

                            <div className="form-group">
                                <label for="email" className="cols-sm-2 control-label">Seu e-mail</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" name="email" id="email" placeholder="Digite seu e-mail" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label for="password" className="cols-sm-2 control-label">Senha</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                        <input type="password" className="form-control" name="password" id="password" placeholder="Digite sua senha" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group ">
                                <button type="button" className="btn btn-primary btn-lg btn-block login-button">Cadastrar</button>
                            </div>
                            <div className="login-register">
                                <a href="index.php">Login</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <script type="text/javascript" src="assets/js/bootstrap.js"></script>
        </div>
    );
}
export default Login;