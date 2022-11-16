/* CommunityRead.html */


stickyNav();

let $dropdownMenu = $(".dropdown-menu.dropdown-menu-right.sticky-nav-menu");
let $boardMenu = $(".dropdown-menu.dropdown-menu-right.board-menu");
let $commentMenu = $(".dropdown-menu.dropdown-menu-right.comment-menu");
let $loginModal = $(".swal2-container.swal2-center");
let navCheck = -1;
let commentCheck = -1;

/* 스크롤이 최상단이 아니면 제목 nav 보이기 */
$(window).scroll(function(event){
    stickyNav();
});


/* 제목 nav의 도시락 버튼 클릭 시 드롭메뉴 보이기 */
$("button#__BVID__1564__BV_toggle_").on("click", function(){
    openDropdown($dropdownMenu);
    console.log("제목")
});


/* 게시글 도시락 버튼 시 수정, 삭제 메뉴 보이기 */
$(".board-dropdownmenu-menuBtn").on("click", function(){
    openBoardMenu($boardMenu);
    console.log("게시글")
});


/* 댓글 도시락 버튼 클릭 시 수정, 삭제 메뉴 보이기 */
$("button#__BVID__1555__BV_toggle_").on("click", function(){
    openCommentMenu($commentMenu);
    console.log("댓글")
});


/* 댓글 입력 시 로그인 안되어있을 경우 로그인 모달창 띄우기 */
$("#__BVID__1499").on("focus", function(){
    openLoginModal();
});


/* 로그인 모달 취소 버튼 클릭 시 돌아가기 */
$(".swal2-cancel.btn").on("click", function(){
    closeLoginModal();
});


function stickyNav(){
    let $scrollTop = $(this).scrollTop();

    if($scrollTop == 0){
        $("#app-sticky-nav .fixed").removeClass("show");
    }else {
        $("#app-sticky-nav .fixed").addClass("show");
    }
}

function openDropdown(menu){
    menu.toggle();
}

function openBoardMenu(menu){
    menu.toggle();
}

function openCommentMenu(menu){
    menu.toggle();
}

function openLoginModal(){
    $loginModal.css('display', 'block');
    $("body").css('overflow-y', 'hidden');
}

function closeLoginModal(){
    $loginModal.css('display', 'none');
    $("body").css('overflow-y', 'auto');
}