import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";
const WhoToFollowList = () => {
   return (`
           <ul class="list-group">
                <li class="list-group-item">
                        <h6 class="mb-0">Who to follow</h6>
                </li>
            ${
                who.map(whoLi => {
                    return(WhoToFollowListItem(whoLi));
                }).join('')
            }
           </ul>
    `); 
}

export default WhoToFollowList;