export default function Article() {

    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <img
                    src="https://via.placeholder.com/800x400"
                    alt="Recipe"
                    className="img-fluid rounded mb-4"
                />
                <h1 className="display-5 fw-bold">Recipe Title</h1>
                <p className="col-md-8 fs-4">
                    This is a brief description of the recipe. It provides an overview of the dish, its flavors, and why it's worth trying.
                </p>
            </div>
        </div>
    );


}