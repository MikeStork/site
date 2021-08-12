import React from 'react'
import PropTypes from 'prop-types'
import './CardCabinet.css'
import imglnk from './../img/5.jpg'
const Card = ({id, title, titleVisible, borderStyle, imgBorderStyle, imgUrl}) =>{
    return(
        <div style={borderStyle}className="Card" data-id={id}>
            <img style={imgBorderStyle} src={imgUrl} alt={title}/>
            {titleVisible ? <p>{title}</p> : <></>}
        </div>
    )
} 
Card.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    titleVisible: PropTypes.bool,
    borderStyle: PropTypes.object,
    imgBorderStyle: PropTypes.object,
    imgUrl: PropTypes.string.isRequired
}
Card.defaultProps = {
    titleVisible: true,
    borderStyle: {borderRadius: '15px'},
    imgBorderStyle: {
        borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px'
    }
}
const CardCabinet = () => {
    return (
        <div className="Cabinet" data-testid="CardCabinet">
            <Card id={1} title={'Card-1'} imgUrl={imglnk} titleVisible={true}/>
            <Card id={2} title={'Card-2'} imgUrl={imglnk} titleVisible={false} imgBorderStyle={{borderRadius: '15px'}}/>
            <Card id={3} title={'Card-3'} imgUrl={imglnk} titleVisible={true}/>
            <Card id={4} title={'Card-4'} imgUrl={imglnk} titleVisible={true}/>
            <Card id={5} title={'Card-5'} imgUrl={imglnk} titleVisible={true}/>
            <Card id={6} title={'Card-6'} imgUrl={imglnk} titleVisible={true}/>
        </div>
    )
}

export default CardCabinet
