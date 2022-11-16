package com.example.byeolbyeolsseudam.controller.login;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/login/*")
public class LoginController {

    @GetMapping("/login")
    public String login(){
        return "/app/login/login";
    }

    @GetMapping("/find_password")
    public String findPassword(){
        return "/app/login/find_password";
    }

    @GetMapping("/find_password_done")
    public String findPasswordDone(){
        return "/app/login/find_password_done";
    }
}
