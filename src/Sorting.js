import React, { useState, useEffect, useRef}  from 'react'
// import { Dropdown } from 'semantic-ui-react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import contents from './content'

function Sorting(){
    const [sortVar,setSortBy] = useState('none');
    const [newContent,setNewContent] = useState(contents)
    const sort1 = useRef(null)
    const sort2 = useRef(null)
    const sort3 = useRef(null)

    const handleClick = (e) => {
        e.preventDefault()
        switch(e.target.id){
            case 'none': setSortBy('none')
                          break;
            case 'rating': setSortBy('rating')
                           break;
            case 'review': setSortBy('review')
                          break;
            default      : console.log('error')              

        }
        console.log(sortVar)
    }
    useEffect(() => {
        if(sortVar === 'rating'){
            setNewContent(newContent.sort((a, b) => (a.rating > b.rating) ? 1 : -1))
        }
        else if (sortVar === 'review'){
            setNewContent(newContent.sort((a, b) => (a.review > b.review) ? 1 : -1))
        }
        else {
            setNewContent(contents)
        }
    },[sortVar,newContent])

return(
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
)
}

export default Sorting

