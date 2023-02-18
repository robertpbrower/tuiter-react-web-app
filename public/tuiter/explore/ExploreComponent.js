import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
        <div class="row">
            <div class="col position-relative align-self-center">
                <div class="position-absolute start-0 ms-4 mt-1">
                    <i class="fa fa-search"></i>
                </div>
                <input type="text" placeholder="Search Tuiter" class="rounded-pill ps-5 w-100 border-1 wd-content-border" />
            </div>
            <div class="col-auto align-self-center">
                <a href="explore-settings.html" class="">
                    <i class="fa fa-cog fa-2x"></i>
                </a>
            </div>

        </div >
        <ul class="nav nav-tabs mt-2 mb-2">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="entertainment.html">Entertaiment</a>
            </li>
        </ul>

        <div class="position-relative">
            <img src="../../images/starship.jpeg" class="img-fluid">
                <div class="h2 text-white position-absolute bottom-0 start-0 ps-2">
                    SpaceX's Starship
                </div>
        </div>
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
