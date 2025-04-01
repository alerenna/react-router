export default function Homepage() {
    return (
        <>
            <main>
                {/* Jumbotron */}
                <div className="jumbotron p-5 mb-4 rounded-3">
                    <div className="container py-5">
                        <h1 className="display-5 fw-bold">Benvenuti su Giallo Booleano</h1>
                        <p className="col-md-8 fs-4">
                            Il tuo blog di riferimento per aiutare gli sviluppatori a cucinare piatti deliziosi in poco tempo,
                            così da poter dedicare più energie ai loro progetti senza sacrificare una buona alimentazione.
                        </p>
                        <button className="btn btn-dark btn-lg" type="button">
                            Scopri di più
                        </button>
                    </div>
                </div>

                {/* La nostra storia */}
                <div className="our-story py-5">
                    <div className="container">
                        <h2 className="mb-4">La nostra storia</h2>
                        <div className="row">
                            <div className="col-md-6"></div>
                            <p>
                                Giallo Booleano nasce dalla passione per la cucina e il desiderio di aiutare gli sviluppatori a trovare il giusto equilibrio
                                tra lavoro e alimentazione. Condividiamo ricette autentiche e innovative per rendere la cucina semplice e veloce.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img src="https://picsum.photos/500/300" alt="La nostra storia" className="img-fluid rounded" />
                        </div>
                    </div>
                </div>


                {/* Le nostre ricette migliori */}
                <div className="best-receips py-5">
                    <div className="container">
                        <h2 className="mb-4">Le nostre ricette migliori</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <p>
                                    Scopri le ricette che ti permettono di cucinare piatti deliziosi in poco tempo, ideali per chi ha una vita piena di impegni.
                                </p>
                                <ul className="list-unstyled">
                                    <li>Spaghetti alla Carbonara</li>
                                    <li>Pizza Margherita</li>
                                    <li>Tiramisù</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <img src="https://picsum.photos/500/300" alt="Le nostre ricette migliori" className="img-fluid rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}