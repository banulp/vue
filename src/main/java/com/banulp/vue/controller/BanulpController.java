package com.banulp.vue.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class BanulpController {

    @GetMapping("/list")
    ModelAndView list(ModelAndView m){
        m.setViewName("index");
        return m;
    }
}
