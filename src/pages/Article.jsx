import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Article() {
    const [article, setArticle] = useState(null)
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()

    const { slug } = useParams()
    console.log(slug);




    useEffect(() => {
        fetch(`http://localhost:3003/api/v1/posts/${slug}`)
            .then(res => res.json())
            .then(data => {
                setArticle(data)
            })
            .catch(err => {
                console.log(err);

            })

        fetch('http://localhost:3003/api/v1/posts/')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch((err) => console.log(err))
    }, [slug])

    const currentIndex = posts.findIndex(post => post.slug === slug)
    const nextPost = posts[currentIndex + 1]


    return (
        <>
            <main>
                {
                    !article ? ('Loading...')
                        : (
                            <>
                                <div style={{ minHeight: '30vh', backgroundImage: `url(http://localhost:3003/images/${article.image})` }}></div>
                                <section className="article">
                                    <div className="container">
                                        <h1 className="my-3">{article.title}</h1>
                                        <p>{article.content}</p>
                                        <div className="pulsanti d-flex gap-5 justify-content-center">
                                            <button className="btn btn-warning back-button my-5" onClick={() => navigate(-1)}>
                                                <i className="bi bi-backspace"></i> Torna indietro
                                            </button>

                                            {nextPost && (
                                                <button className="btn btn-warning my-5" onClick={() => navigate(`/blog/${nextPost.slug}`)}>
                                                    <i class="bi bi-backspace-reverse"> Vai al prossimo articolo</i>
                                                </button>
                                            )}
                                        </div>

                                    </div>


                                </section>
                            </>
                        )
                }
            </main >
        </>
    );
}