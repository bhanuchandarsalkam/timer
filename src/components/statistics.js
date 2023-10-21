import React from 'react';

const Statistics=()=>{

    return(
        <div>
        <div className="stats">
            <div>refresh</div>
            <div>
                <p><button className="first">esc</button><span>-  reset</span></p>
            </div>
            <div>
                <button className="first">10</button>
                <button className="first">50</button>
                <button className="first">80</button>
                <button className="first">100</button>
                <span>- no of words</span>
            </div>
        </div>
        <div class="some">
        <div class="good">
            <a href="#">good</a>
            <a href="#">good</a>
            <a href="#">good</a>
            <a href="#">good</a>
         </div>
         <select class="select">
            <option>blue</option>
            <option>red</option>
            <option>green</option>
            <option>yellow</option>
         </select>
        </div>
        </div>
    )
}
export default Statistics;
