package com.example.byeolbyeolsseudam.controller.jubgging;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/test/*")
public class JubggingController {

    @GetMapping("/jubgging")
    public String program(){
        return "/app/jubgging/jubgging";
    }
}
