// 리스트 체크박스
var $all = $(".form-check-input.total");
var $checkboxes = $(".form-check-input.checkbox");

$(".app_sidebar_menu_item").on('click', function() {
	var $value = $(this).find('.sidebar_menu_arrow').css('transform');
	var angle = $value == 'matrix(1, 0, 0, 1, 0, 0)' ? 180 : 0;
	$(this).find('.sidebar_menu_arrow').css('transform', 'rotatez(' + angle + 'deg)');
	$(this).next().slideToggle();
});

$(".app_sidebar_menu_item").on('mouseover', function() {
	if ($(this).children().eq(1).children().text() === "사이트 바로가기") {
		$(this).css('background-color', '#00c7ae');
	} else {
		$(this).css('background-color', 'rgb(69,88,88)');
	}
});

$(".app_sidebar_menu_item").on('mouseout', function() {
	if ($(this).children().eq(1).children().text() === "사이트 바로가기") {
		$(this).css('background-color', 'rgb(69,88,88)');
	} else {
		$(this).css('background-color','rgb(59,56,62)' );
	}
});


// 이미지 첨부 시 썸네일 변경
$("#icon_img").on('change', function(e) {
	var reader = new FileReader();
	let type = e.target.files[0].type;
	reader.readAsDataURL(e.target.files[0]);

	reader.onload = function(e) {
		let url = e.target.result;
		if (type.includes('image')) {
			$("#thumbnail").attr('src', url);
		} else {
			$("#thumbnail").attr('src', "../images/no-image.JPG");
		}
	}
});

// 등록 모달창 열기
$("div.card-toolbar > div > button:nth-child(1)").on("click", function() {
	var $value = $("#kt-toolbar-filter").css('display');
	$(this).addClass('show');
	$("#kt-toolbar-filter").css('display', $value === 'flex' ? 'none' : 'flex');
});

$("div.card-toolbar > div > button:nth-child(4)").on("click", function() {
	var $modal = $("#kt_modal_add_customer");
	$modal.css('display', $modal.css('display') === 'none' ? 'block' : 'none');
});

// 등록 모달창 x 버튼 클릭 시 모달창 닫기 
$("#kt_modal_add_customer_close > .svg-icon.svg-icon-1").on('click', function() {
	$("#kt_modal_add_customer").css('display', 'none');
});

// 등록 모달창 취소 버튼 클릭 시 모달창 닫기
$("#kt_modal_add_customer_cancel").on('click', function() {
	$("#kt_modal_add_customer").css('display', 'none');
});


// 리스트 체크박스 전체 선택
$all.on("click", function() {
	$checkboxes.prop("checked", $all.is(":checked"));
});

// 리스트 체크박스 각각 선택
$checkboxes.on("click", function() {
	$all.prop("checked", $checkboxes.filter(":checked").length == $checkboxes.length);
	console.log($checkboxes.filter(":checked").length)
});





