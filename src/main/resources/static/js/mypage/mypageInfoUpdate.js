/* mypageInfoUpdate.html */

let $cameraIcon = $(".camera-icon");
let $profileModal = $("#__BVID__264___BV_modal_outer_");
let $profileModalBackground = $("#__BVID__264");
let $profileModalCancelBtn = $(".modal-cancel-btn");

let $dropOutBtn = $(".delete-account");
let $dropOutModal = $(".swal2-container");
let $dropOutModalCancelBtn = $(".swal2-confirm");

$cameraIcon.on('click', function(){
    profileModalOpen();
});

$profileModalCancelBtn.on('click', function(){
    profileModalClose();
});

$profileModalBackground.on('click', function(){
    profileModalClose();
});

$dropOutBtn.on('click', function(){
    dropOutModalOpen();
});

$dropOutModalCancelBtn.on('click', function(){
    dropOutModalClose();
});

/* $dropOutModal.on('click', function(){
    dropOutModalClose();
}); */


/* 프로필 모달 띄우기 */
function profileModalOpen(){
    $profileModal.css('display', 'block');
}

/* 프로필 모달 취소하기 버튼 */
function profileModalClose(){
    $profileModal.css('display', 'none');
}

/* 탈퇴 모달 띄우기 */
function dropOutModalOpen(){
    $dropOutModal.css('display', '');
}

/* 탈퇴 모달 취소하기 버튼 */
function dropOutModalClose(){
    $dropOutModal.css('display', 'none');
}