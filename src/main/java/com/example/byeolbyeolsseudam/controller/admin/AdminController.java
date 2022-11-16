package com.example.byeolbyeolsseudam.controller.admin;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/admin/*")
public class AdminController {
    /* 베너관리- 베너 추가 */
    @GetMapping("adminbanneradd")
    public String adminBannerAdd(){
        return "/app/admin/adminBannerAdd";
    }
}
