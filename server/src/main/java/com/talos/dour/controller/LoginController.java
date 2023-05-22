package com.talos.dour.controller;

import com.talos.dour.dto.AuthenticationRequest;
import com.talos.dour.model.User;
import com.talos.dour.repository.UserRepository;
import com.talos.dour.utils.PasswordHasher;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/auth/")
public class LoginController {
    @Autowired
    private UserRepository userRepository;

    PasswordHasher passwordHasher = new PasswordHasher();
    @PostMapping("/login")
    public String loginUser (@RequestBody AuthenticationRequest request, HttpServletResponse response) {
        User user = userRepository.findByNameAndPassword(request.getUsername(), passwordHasher.hashSHA256(request.getPassword()));

        if (user != null) {
            Cookie session_cookie = new Cookie("session-id", UUID.randomUUID().toString());
            session_cookie.setMaxAge(3600);
            response.addCookie(session_cookie);

            Cookie identity_cookie = new Cookie("currentUser", user.getName());
            identity_cookie.setMaxAge(3600);
            response.addCookie(identity_cookie);

            return "Login Successful!";
        } else {
            return "Invalid username or password";
        }
    }

    @PostMapping("/logout")
    public String logout(HttpServletRequest request, HttpServletResponse response) {
        Cookie[] cookies = request.getCookies();

        Cookie currentUserCookie = null;

        for (Cookie cookie: cookies) {
            if (cookie.getName() == "session-id" || cookie.getName() == "currentUser") {
                currentUserCookie = cookie;

                if (currentUserCookie != null) {
                    currentUserCookie.setMaxAge(0);
                    response.addCookie(currentUserCookie);
                }
            }
        }
        return "Logout Successful!";
    }
}
