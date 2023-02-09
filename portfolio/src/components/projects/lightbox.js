import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Lightbox = (props) => {
    const img = props.img;
    const [ show, setShow ] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <img src={img.img} className="img img-fluid screenshot mb-2 border border-secondary w-75 mx-auto d-block" title={img.alt} alt={img.alt} onClick={handleShow}/>
            <div className="text-center fst-italic text-muted" style={{"line-height": "16px"}}>{img.alt}<br/><span style={{"font-size": "12px"}}>Click to enlarge<br/></span></div>
            <Modal 
                show={show}
                onHide={handleClose}
                dialogClassName="img-modal"
                centered
            >
                <Modal.Header closeButton>&nbsp;</Modal.Header>
                <Modal.Body><img src={img.img} className="img img-fluid mb-2 border border-secondary mx-auto d-block" title={img.alt} alt={img.alt}/></Modal.Body>
            </Modal>
        </div>
    )
}

export default Lightbox;