import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Article() {
    const [article, setArticle] = useState(null)

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
    }, [])


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
                                        <h1>{article.title}</h1>
                                        <p>{article.content}</p>

                                    </div>
                                </section>
                            </>
                        )
                }
            </main>
        </>
    );
}