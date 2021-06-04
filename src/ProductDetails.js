import React from 'react'
import './ProductDetails.css'
import InsertLinkOutlinedIcon from '@material-ui/icons/InsertLinkOutlined';
import InsertCommentOutlinedIcon from '@material-ui/icons/InsertCommentOutlined';
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';
import {useEffect} from 'react'

function ProductDetails(props) {

    return (
        <div className="productDetails">
            <div className="logo">
                <img className="logo" src={props.img} alt={props.title}></img>
            </div>
            <div className="details">
                <div className="upper_row">
                    <h3>{props.heading}</h3>
                    <InsertLinkOutlinedIcon style={{paddingLeft:'10px',transform: 'rotate(-45deg)',color: '#8661BB'}} />
                    <div className="rating">
                        <div className="rating_icon"><PieChartOutlinedIcon style={{color: 'green',}}/></div>
                        <p>{props.rating} Rating</p>
                    </div>
                    <div className="review">
                        <div className="review_icon"><InsertCommentOutlinedIcon style={{color: '#8661BB',}}/></div>
                        <p style={{margin:'0 5px'}}>{props.review} Review</p>
                    </div>
                </div>
                <p style={{fontWeight:'500',marginBottom:'10px'}}>{props.title}</p>
                <p style={{fontWeight:'400',marginBottom:'10px',fontSize:'14px'}}>{props.content}</p>
                <button className="dropbtn1" type="button">
                <p>View Details</p>
              </button>
            </div>
            <div className="button">
                <button className="website_button" type="button">
                    <p style={{color:"white",fontStyle: 'normal',fontWeight: '600',fontSize: '16px',lineHeight: '32px'}}>View Website</p>
                </button>
            </div>
        </div>
    )
}

export default ProductDetails
