package com.example.byeolbyeolsseudam.controller.pickup;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/pickup")
public class PickupController {

    @GetMapping("/pickDetail")
    public String pickDetail(){
        return "/app/pickup/pickDetail";
    }
    @GetMapping("/pickWantedList")
    public String pickWantedList(){
        return "/app/pickup/pickWantedList";
    }
    @GetMapping("/pickAcceptedList")
    public String pickAcceptedList(){
        return "/app/pickup/pickAcceptedList";
    }
    @GetMapping("/pickFinishedList")
    public String pickFinishedList(){
        return "/app/pickup/pickFinishedList";
    }

}
