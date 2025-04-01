import { useState, useEffect } from 'react'

export default function Blog() {
    const [posts, setPosts] = useState([])

    function fetchPosts() {
        fetch('http://localhost:3003/api/v1/posts')
            .then((res) => res.json())
            .then(setPosts)
    }

    useEffect(fetchPosts, [])


    const handleDelete = (slug) => {
        fetch(`http://localhost:3003/api/v1/posts/${slug}`, { method: 'DELETE' })
            .then(() => {
                setPosts((prevPosts) => prevPosts.filter(post => post.slug !== slug));
            })
            .catch((error) => console.error('Error deleting post:', error));
    };

    return (
        <>
            <div className="p-5 mb-4 bg-black">
                <div className="container py-5">
                    <h1 className="display-5 fw-bold text-warning">Benvenuti nel nostro Blog di Cucina</h1>
                    <p className="col-md-8 fs-4 text-warning">
                        Scopri ricette deliziose, consigli culinari e segreti per rendere ogni piatto un capolavoro.
                        Unisciti a noi in questo viaggio tra sapori e tradizioni!
                    </p>
                </div>
            </div>

            <main>
                <div className="container py-5">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3">
                        {posts.map(post => (
                            <div key={`post-${post.slug}`} className="col d-flex">
                                <div className="card h-100">
                                    <img src={`http://localhost:3003/images/${post.image}`} alt={post.name} className="card-img-top" />
                                    <div className="card-body">
                                        <h3 className='post-title'>{post.title}</h3>
                                        <p className='tronca'>{post.content}</p>
                                        <div className="container">
                                            <div className="tags">
                                                {post.tags.map((tag, index) => (
                                                    <button key={`tag-${index}`} className='btn btn-warning m-1'>{tag}</button>
                                                ))}
                                            </div>
                                            <button
                                                className="btn btn-danger mt-5" onClick={() => handleDelete(post.slug)}>
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}