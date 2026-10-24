import { Link, useParams } from "react-router";

function User() {

    const { id } = useParams();

    return(
        <>
            <section className="page-content">
                <span className="hero-tag">PERFIL DE USUÁRIO</span>
                
                <h1>Perfil do usuário</h1>
                
                <div className="profile-card">
                    <div className="profile-avatar">👤</div>

                    <h2>Usuário: {id}</h2>

                    <p>Identificador do perfil: <strong>{id}</strong></p>

                    <p>Este conteúdo é renderizado dinamicamente utilizando o parâmetro da URL.</p>
                </div>

                <Link to="/" className="btn btn-outline">
                    Voltar ao início
                </Link>
            </section>
        </>
    );
}

export default User;