import React from 'react';
import './courosal.css'

const Courosal = () => {
    return (
        <div className="carousel-container">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/image/slider1_cnt.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="/image/slider2_cnt.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="/image/slider3_cnt.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        </div>
            // <div>
            // <div className='container-fluid' >
            // <div className="row">
            // <div className="col-sm-12">
            // <h3>React Bootstrap Carousel</h3>
            // </div>
            // </div>
            // <div className="row">
            // <div className="col-12">
            // <Carousel>
            // <Carousel.Item>
            // <img
            // className="d-block w-100"
            // src="https://picsum.photos/500/300?img=1"
            // alt="First slide"
            // />
            // <Carousel.Caption>
            // <h3>First slide label</h3>
            // <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            // </Carousel.Caption>
            // </Carousel.Item>
            // <Carousel.Item>
            // <img
            // className="d-block w-100"
            // src="https://picsum.photos/500/300?img=2"
            // alt="Second slide"
            // />
            // <Carousel.Caption>
            // <h3>Second slide label</h3>
            // <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            // </Carousel.Caption>
            // </Carousel.Item>
            // <Carousel.Item>
            // <img
            // className="d-block w-100"
            // src="https://picsum.photos/500/300?img=3"
            // alt="Third slide"
            // />
            // <Carousel.Caption>
            // <h3>Third slide label</h3>
            // <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            // </Carousel.Caption>
            // </Carousel.Item>
            // </Carousel>
            // </div>
            // </div>
            // </div>
            // </div>
          
    )
}
export default Courosal;
