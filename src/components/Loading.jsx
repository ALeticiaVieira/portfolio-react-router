function Loading() {
    return(
        <>
            <div className="loading" role="status">
                <div className="spinner" aria-hidden="true"></div>

                <p>Carregando a página...</p>
                <span>Preparando sua experiência</span>
            </div>
        </>
    );
}

export default Loading;