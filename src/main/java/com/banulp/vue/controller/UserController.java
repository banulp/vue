package com.banulp.vue.controller;

import com.banulp.vue.model.User;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class UserController {

    @GetMapping("/user")
    String getUser(@RequestParam("id") String id){
        return id;
    }

    @PostMapping("/user")
    String postUser(@RequestBody User user){
        return "Good Job" + user.getFirstName() + user.getLastName();
    }
}
