import { Link } from "react-router";

function About() {
    return(
        <>  
            <section className="page-content">
                <span className="hero-tag">SOBRE MIM</span>
                <h1>Um pouco sobre mim</h1>
                <p>Olá! Me chamo Ana Letícia, sou estudante de Desenvolvimento Full Stack. Desde criança gosto de tecnologia e amo aprender coisas novas e criatividade. </p>

                <p>Estou desenvolvendo minhas habilidades em programação, explorando tecnologias como HTML, CSS, JavaScript, React e Python.</p>

                <p>Meu objtetivo é transformar conhecimento em soluções digitais, criando projetos que unam funcionalidade, organização e criatividade.</p>

                <div className="hero-actions">
                    <Link to="/contact" className="btn btn-primary">
                        Entre em contato ↗
                    </Link>

                    <Link to="/" className="btn btn-outline">
                        Voltar ao início
                    </Link>
                </div>
            </section>
        </>
    );
}

export default About;