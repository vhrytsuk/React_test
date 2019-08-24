import React from 'react';
import './index.css';
import SliderItem from "../sliderItem";


const ContactSlider = (sliders) => {

    const Imag= sliders.ContactSlider.map((nam) => {

        return (
            <SliderItem namber={nam.namb} />
        )
    })

    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                    {Imag}

                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
export default ContactSlider;