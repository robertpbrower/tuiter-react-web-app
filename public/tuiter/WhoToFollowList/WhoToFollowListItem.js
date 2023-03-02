function WhoToFollowListItem(who) {
  const { avatarIcon, userName, handle } = who;
  return (`
    <li class="list-group-item">
    <div class="row align-items-center">
        <div class="col-2 px-xl-2 px-lg-1">
            <img class="rounded-circle img-fluid" src="../../../images/${avatarIcon}">
        </div>
        <div class="col p-0">
            ${userName}
            <i class="fa fa-check-circle"></i>
            <br>
            @${handle}
        </div>
        <div class="col-auto">
            <button class="btn btn-primary rounded-pill">Follow</button>
        </div>
    </div>
</li>
   `);
}

export default WhoToFollowListItem;
