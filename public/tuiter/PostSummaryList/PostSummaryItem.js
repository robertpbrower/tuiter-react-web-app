
function PostSummaryItem(post) {
    const { topic, userName, time, image, title, tweets} = post;
    return (`
        <div class="p-2 row m-0 bg-light">
            <div class="col-10">
                <div class="text-secondary">${topic}</div>
                <div class="fw-bold">
                    ${userName} <i class="fa fa-check-circle"></i>
                    <Span class="text-secondary fw-normal"> - ${time}</Span>
                </div>
                <div class="fw-bold">
                    ${title}
                </div>
                ${tweets? `<div class="text-secondary">${tweets} Tuits</div>` : ``}
            </div>
            <div class="col-2 align-self-center">
                <img src="${image}" class="img-fluid" />
            </div>
        </div>

    `);
}

export default PostSummaryItem;