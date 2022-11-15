/* CommunityWrite.html */

let $title = $("#post-title-input");
let $content = $("textarea[name='post-content']");
let $submitBtn = $("button.write-post-submit");
let $xBtn = $("button.close");
let $okBtn = $("button.btn-block");
let $selectbox = $("select.post-subject-select-box");

$title.on('keyup', function(){
    submitBtn();
});

$content.on('keyup', function(){
    submitBtn();
});

$xBtn.on('click', function(){
    closeModal();
});

$okBtn.on('click', function(){
    closeModal();
});

$selectbox.on('click', function(){
    selectSubject();
});

/* x버튼 혹은 확인 버튼 누르면 모달 닫기 */
function closeModal(){
    $("#__BVID__540___BV_modal_outer_").css('display', 'none');
}

/* 글 주제 selectbox 클릭 시 주제선택은 선택 못하도록 */
function selectSubject(){
    $selectbox.children().eq(0).attr("disabled", true);
}

/* 유효성 검사 & 버튼 활성화 */
function submitBtn(){
    if(!$title.val()){
        $submitBtn.removeClass("active");
        $submitBtn.attr("disabled", true);
        return;
    }
    
    if(!$content.val()){
        $submitBtn.removeClass("active");
        $submitBtn.attr("disabled", true);
        return;
    }

    $submitBtn.addClass("active");
    $submitBtn.removeAttr("disabled");
}
