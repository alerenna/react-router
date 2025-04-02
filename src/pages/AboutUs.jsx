import { useNavigate } from "react-router-dom"

export default function AboutUs() {

    const navigate = useNavigate()

    return (
        <>
            <main>
                <div className="container my-5">
                    <h1 className="text-center text-warning">Chi Siamo</h1>
                    <p className="text-center text-dark">
                        Benvenuti nel nostro blog di cucina, pensato per sviluppatori che vogliono risparmiare tempo in cucina.
                        Qui troverete ricette veloci e facili, perfette per chi ha poco tempo ma non vuole rinunciare al gusto.
                    </p>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <h2 className="text-warning">La Nostra Missione</h2>
                            <img src="https://picsum.photos/300/200" alt="Missione" className="img-fluid rounded mb-3" />
                            <p className="text-dark">
                                Aiutare gli sviluppatori a cucinare piatti deliziosi in poco tempo,
                                così da poter dedicare più energie ai loro progetti senza sacrificare una buona alimentazione.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h2 className="text-warning">Perché Sceglierci</h2>
                            <img src="https://picsum.photos/300/200" alt="Perché Sceglierci" className="img-fluid rounded mb-3" />
                            <p className="text-dark">
                                Offriamo ricette testate e ottimizzate per essere rapide, semplici e gustose.
                                Ogni piatto è pensato per adattarsi alla vita frenetica di chi lavora nel mondo tech.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 text-center">
                        <h2 className="text-warning">Unisciti a Noi</h2>
                        <img src="https://picsum.photos/600/300" alt="Unisciti a Noi" className="img-fluid rounded mb-3" />
                        <p className="text-dark">
                            Diventa parte della nostra community e scopri come trasformare la cucina in un momento di relax,
                            anche nelle giornate più impegnative.
                        </p>
                        <button onClick={() => navigate('/')} className="btn btn-warning text-dark">Torna alla Homepage</button>
                    </div>
                </div>
            </main>

        </>

    )
}