import { Link } from "react-router";

function NotFound() {
    return(
        <>
            <section className="not-found">
                <span className="error-code">404</span>

                <h1>Página não encontrada!</h1>

                <p>O endereço que você tentou acessar não existe ou não está disponível.</p>
                
                <Link to="/" className="btn btn-primary">
                    🏠 Voltar ao início
                </Link>
            </section>
        </>
    );
}

export default NotFound;