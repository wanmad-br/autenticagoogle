package com.userlogin.controllers;

import com.userlogin.models.User;
import com.userlogin.services.GoogleAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private GoogleAuthService googleAuthService;

    @GetMapping("/login")
    public String login() {
        return googleAuthService.getGoogleAuthUrl();
    }

    @GetMapping("/callback")
    public User callback(@RequestParam("code") String code) {
        return googleAuthService.authenticateUser(code);
    }
}