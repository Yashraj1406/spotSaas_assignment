import React, {useRef, useState, useEffect} from 'react'
import './Products.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import contents from './content.js'
import ProductDetails from './ProductDetails'
// import SideRowContent from './SideRowContent'
import { IconButton } from '@material-ui/core'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import StarIcon from '@material-ui/icons/Star';
// import Sorting from './Sorting'
import './Sorting.css'


function Products() {

    const [sortVar,setSortBy] = useState('none');
    const [newContent,setNewContent] = useState(contents)
    const [rating,setRating] = useState([]);
    const [min,setMin] = useState(1)
    const check1 = useRef(null)
    const check2 = useRef(null)
    const check3 = useRef(null)
    const check4 = useRef(null)
    const check5 = useRef(null)
    const sort1 = useRef(null)
    const sort2 = useRef(null)
    const sort3 = useRef(null)

    // const [filtered,setFiltered] = useState(contents)
    const handleClick = (e) => {
        // e.preventDefault()
        switch(e.target.id){
            case 'none': setSortBy('none')
                          break;
            case 'rating': setSortBy('rating')
                           break;
            case 'review': setSortBy('review')
                          break;
            default      : console.log('error')              

        }
    }

    function handleChange(e){
        switch(e.target.id){
            case 'first': if (check1.current.checked){
                            setRating([...rating,check1.current.value])
                          }
                          else {
                            setRating(rating.filter((item) => (item !== check1.current.value)))
                          }
                          break;
            case 'second': if (check2.current.checked){
                             setRating([...rating,check2.current.value])
                           }
                           else{
                            setRating(rating.filter((item) => (item !== check2.current.value)))
                           }
                           break;
            case 'third': if (check3.current.checked){
                             setRating([...rating,check3.current.value])
                            }
                            else {
                             setRating(rating.filter((item) => (item !== check3.current.value)))
                            }
                            break;
            case 'fourth': if (check4.current.checked){
                             setRating([...rating,check4.current.value])
                           }
                           else {
                             setRating(rating.filter((item) => (item !== check4.current.value)))
                           }
                           break;        
            case 'fifth': if (check5.current.checked){
                            setRating([...rating,check5.current.value])
                           }
                           else {
                            setRating(rating.filter((item) => (item !== check5.current.value)))
                           }
                           break;                       

            default     : console.log('something went wrong!');              
        }
    }



    useEffect(() => {
        if(rating.length !== 0){
            setMin(Math.min(...rating))
            setNewContent(contents.filter((item) => (item.rating >= min)))
            if(sortVar === 'rating'){
                setNewContent(newContent.sort((a, b) => (a.rating > b.rating) ? 1 : -1))
            }
            else if (sortVar === 'review'){
                setNewContent(newContent.sort((a, b) => (a.review > b.review) ? 1 : -1))
            }
        }
        else {
            setMin(1)
            if(sortVar === 'rating'){
                setNewContent(contents.sort((a, b) => (a.rating > b.rating) ? 1 : -1))
            }
            else if (sortVar === 'review'){
                setNewContent(contents.sort((a, b) => (a.review > b.review) ? 1 : -1))
            }
            else {
                setNewContent(contents)
            }
        }
        console.log(newContent)
    },[rating,min,sortVar,newContent])

    // useEffect(() => {
    //     if(sortVar === 'rating'){
    //         setNewContent(newContent.sort((a, b) => (a.rating > b.rating) ? 1 : -1))
    //     }
    //     else if (sortVar === 'review'){
    //         setNewContent(newContent.sort((a, b) => (a.review > b.review) ? 1 : -1))
    //     }
    //     else {
    //         setNewContent(contents)
    //     }
    // },[sortVar,newContent])


    return (
        <div className="products">
            <div className="product_header">
                <div className="first_line">
                    <h1>Products</h1>
                    <button style={{marginLeft:'400px'}} className="dropbtn spacing" type="button"><srtong>All product</srtong></button>
                    <button className="dropbtn spacing" type="button"><srtong>2021 Shortlist</srtong></button>
                    <button className="dropbtn spacing" type="button"><srtong>Buyers Guide</srtong></button>
                </div>
                <div className="second_line">
                    <h3 style={{fontWeight:'normal'}}>FILTER RESULTS</h3>
                    <p className="row_text" style={{marginLeft:'156px',fontWeight:'normal'}}>Showing 1 - 10 of 208 products</p>
                    <p style={{marginLeft:'388px'}}>Sort By:</p>
                    <div className="dropdown-sort">
                        <button className="dropbtn-sort" type="button">
                            <p style={{marginTop:'8.6px',marginRight:'130px'}}>{sortVar}</p>
                            <ExpandMoreIcon />  
                        </button>
                        <div className="dropdown-content-sort">
                            <a ref={sort1} id="none" onClick={handleClick} href="javascript:void(0)">None</a>
                            <a ref={sort2} id="rating" onClick={handleClick} href="javascript:void(0)">Rating</a>
                            <a ref={sort3} id="review" onClick={handleClick} href="javascript:void(0)">Review</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product_content">
                <div className="side_row">
                <div className="siderow_rating">
            <div className="h">
                <h3 style={{marginRight:'200px',color:'black'}}>Rating</h3>
                <IconButton>
                    <ExpandLessIcon />
                </IconButton>
            </div>
            <div>
                <form onChange = {handleChange}>
                    <div className="rating_star">
                    
                        <input id='first' ref={check1} className="rating_checkbox" type="checkbox" name="rating5" value="5" />
                        <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                    </div>
                    <div className="rating_star">
                        <input id='second' ref={check2} className="rating_checkbox" type="checkbox" name="rating4" value="4"/>
                        <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon style={{color:'grey'}} />
                    </div>
                    <div className="rating_star">
                        <input id='third' ref={check3} className="rating_checkbox" type="checkbox" name="rating3" value="3" />
                        <StarIcon /><StarIcon /><StarIcon /><StarIcon style={{color:'grey'}}/><StarIcon style={{color:'grey'}}/>
                    </div>
                    <div className="rating_star">
                        <input id='fourth' ref={check4} className="rating_checkbox" type="checkbox" name="rating2" value="2" />
                        <StarIcon /><StarIcon /><StarIcon style={{color:'grey'}}/><StarIcon style={{color:'grey'}}/><StarIcon style={{color:'grey'}}/>
                    </div>
                    <div className="rating_star">
                        <input id='fifth' ref={check5} className="rating_checkbox" type="checkbox" name="rating1" value="1"  />
                        <StarIcon /><StarIcon style={{color:'grey'}}/><StarIcon style={{color:'grey'}}/><StarIcon style={{color:'grey'}}/><StarIcon style={{color:'grey'}}/>
                    </div>
                </form> 
                <p>{min} {sortVar}</p>  
            </div>
        </div>
                </div>
                <div className="content">
                    {newContent?.map((content,sortVar) => ( 
                    <ProductDetails 
                        changeVar={sortVar}
                        key={content.id}
                        heading={content.heading}
                        rating= {content.rating}
                        title={content.title}
                        content={content.content}
                        img={content.img}
                        review= {content.review} />
                    ))}
                    <button className="content_endButton" type="button">
                    <p style={{fontSize:'20px',color:'white'}}>View More</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Products
