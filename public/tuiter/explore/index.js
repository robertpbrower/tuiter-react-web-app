import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";



function exploreComponent() {
    $('#wd-explore').append(`
        <div class="row my-2">
            <div class="col-auto">
                ${NavigationSidebar()}               
            </div>
            <div class="col">
                ${ExploreComponent()}
            </div>
            <div class="col-4 d-none d-lg-block">
                ${WhoToFollowList()}
            </div>
        </div>
    `);
}

$(exploreComponent);