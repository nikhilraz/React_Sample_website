import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App1=()=>{
    return (
        <>
            <h1 className="text-center text-capitalize my-4 text-danger">Welcome Nikki!!</h1>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card " >
                            <img src="https://picsum.photos/201/301" height="200px"   class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" >
                            <img src="https://picsum.photos/200/301" height="200px" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" >
                            <img src="https://picsum.photos/202/301" height="200px" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App1;