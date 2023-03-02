const NavigationSidebar = () => (`
        <div class="list-group text-center text-xl-start">
            <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1"
                aria-disabled="true">
                <i class="fab fa-twitter text-white"></i>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fa fa-home"></i>
                <span class="d-none d-xl-inline">Home</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action active">
                <i class="fa fa-hashtag"></i>
                <span class="d-none d-xl-inline">Explore</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fa fa-bell"></i>
                <span class="d-none d-xl-inline">Notifications</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fa fa-envelope"></i>
                <span class="d-none d-xl-inline">Messages</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fa fa-bookmark"></i>
                <span class="d-none d-xl-inline">Bookmarks</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fa fa-list"></i>
                <span class="d-none d-xl-inline">Lists</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fa fa-user"></i>
                <span class="d-none d-xl-inline">Profile</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fa fa-ellipsis-h"></i>
                <span class="d-none d-xl-inline">More</span>
            </a>

            <div class="btn btn-primary rounded-pill mt-2">
                Tuit
            </div>

        </div>
    `);
export default NavigationSidebar;
