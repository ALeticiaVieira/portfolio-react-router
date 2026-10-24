import { Link } from "react-router";

function Home() {
    return(
        <>
            <section className="hero">
                <span className="hero-tag">
                    DESENVOLVIMENTO WEB
                </span>

                <h1>Olá, eu sou Ana Letícia!</h1>

                <h2>Desenvolvedora FullStack em formação.</h2>

                <p>Transformando aprendizados em projetos e ideias em soluções.</p>

                <div className="hero-actions">
                    <Link to="/about" className="btn btn-primary">
                        Sobre mim ↗
                    </Link>

                    <Link to="/contact" className="btn btn-outline">
                        Contato
                    </Link>
                </div>
            </section>
        </>
    );
}

export default Home;