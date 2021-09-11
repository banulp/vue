package com.banulp.vue.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class UserController {

    @GetMapping("/user")
    String list(@RequestParam("id") String id,  ModelAndView m){
        return "Good Job";
    }
}
