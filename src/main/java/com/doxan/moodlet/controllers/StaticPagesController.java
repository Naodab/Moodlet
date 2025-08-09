package com.doxan.moodlet.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StaticPagesController {
    @GetMapping("/")
    public String home() {
        return "staticPages/home";
    }
}
