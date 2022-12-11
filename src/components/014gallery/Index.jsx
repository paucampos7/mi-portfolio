import React from 'react';
import './Gallery.css';
import ImageGallery from 'react-image-gallery'
import foto1 from '../../assets/gallery/img1-layout.jpg'
import foto2 from '../../assets/gallery/img2-idea.jpg'
import foto3 from '../../assets/gallery/img3-connection.jpg'
import foto4 from '../../assets/gallery/img4.jpg'
import foto5 from '../../assets/gallery/img5.jpg'
import foto6 from '../../assets/gallery/img6-dosomethinggreat.jpg'


const Gallery = () => {

    return(

        <div className='gallery'>
            
            <img className='foto' src={foto1} alt="" />

            <img className='foto' src={foto2} alt="" />

            <img className='foto' src={foto3} alt="" />

            <img className='foto' src={foto4} alt="" />

            <img className='foto' src={foto5} alt="" />

            <img className='foto' src={foto6} alt="" />

        </div>
    )
}

export { Gallery }