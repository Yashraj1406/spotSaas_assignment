import React from 'react'
import './Header.css'
import { IconButton } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';

function Header() {
    return (
        <div className="header">
            <div className="icon">
          <div className="navbar">
            <div className="vector">
              <img src='./images/Vector.jpg' alt='Vector_logo' />
            </div>
            <p className="vector_text1">spot</p><p className="vector_text2">SaaS</p>
            <div className="search">
              <input className="search_bar" placeholder="Select Category" type="text"/>
              <IconButton>
                <SearchOutlinedIcon />
              </IconButton>
            </div>
            <div className="dropdown">
              <button className="dropbtn" type="button">
                <p style={{position:'absolute',marginTop:'8.6px',right:'250px'}}>All Category</p>
                <ExpandMoreIcon />
              </button>
              <div className="dropdown-content">
                <a href="#">Category1</a>
                <a href="#">Category2</a>
                <a href="#">Category3</a>
              </div>
            </div>
            <div className="get_listed">
              <p className="inner_text">GET LISTED</p>
            </div>
          </div>  
          <div className="row">
            <div className="row_item">
              <IconButton>
                <HomeOutlinedIcon />
              </IconButton>
              <p className="row_text">Home</p>
              <ArrowRightIcon />
              <p className="row_text">All Categories</p>
              <ArrowRightIcon />
              <p className="row_text">Accounting Software</p>
            </div>
            <div className="row_date">
              <p className="row_text">Updated on: May 22, 2021</p>
            </div>
          </div>
          <div className="detail">
            <h1>Accounting Software</h1>
            <p style={{marginTop:"20px"}}>Find the best Accounting Software for your business. 
            Compare product reviews and features, and learn from our Finance Software Research. 
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
            graphic or web designs. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
            graphic or web designs. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
            graphic or web designs.
            </p>
            <div className="header_sideicons">
              <div className="icon_box">
                <IconButton>
                  <ShareOutlinedIcon />
                </IconButton>
                <p style={{marginTop:'-15px'}}>Share</p>
              </div>
              <div className="icon_box">
                <IconButton>
                  <PersonAddOutlinedIcon />
                </IconButton>
                <p style={{marginTop:'-15px'}}>Follow</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Header
