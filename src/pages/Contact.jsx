import { Link } from "react-router";

function Contact() {
    return(
        <>
            <section className="page-content">
                <span className="hero-tag">CONTATO</span>
                
                <h1>Vamos conversar?</h1>

                <p>Tem alguma ideia, projeto ou oportunidade? Estou aberta a conexões e novas experiências na área de tecnologia.</p>

                <div className="contact-card">
                    <h2>Entre em contato</h2>

                    <p>Você pode conhecer meus projetos e acompanhar minha evolução como desenvolvedora.</p>

                    <a 
                        href="https://github.com/ALeticiaVieira"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Meu GitHub ↗    
                    </a>
                </div>

                <div className="hero-actions">
                    <Link to="/about" className="btn btn-outline">
                        Sobre mim
                    </Link>

                    <Link to="/" className="btn btn-outline">
                        Voltar ao início
                    </Link>
                </div>
            </section>
        </> 
    );
}

export default Contact;