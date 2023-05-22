package com.talos.dour.controller;

import com.talos.dour.dto.AuthenticationRequest;
import com.talos.dour.model.User;
import com.talos.dour.repository.UserRepository;
import com.talos.dour.utils.PasswordHasher;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/auth/")
public class AuthController {
    @Autowired
    private UserRepository userRepository;

    PasswordHasher passwordHasher = new PasswordHasher();
    @PostMapping("/login")
    public String loginUser (@RequestBody AuthenticationRequest request, HttpServletResponse response) {
        User user = userRepository.findByNameAndPassword(request.getUsername(), passwordHasher.hashSHA256(request.getPassword()));

        if (user != null) {
            String sessionId = UUID.randomUUID().toString()
            Cookie session_cookie = new Cookie("session-id", sessionId);
            session_cookie.setMaxAge(3600);
            response.addCookie(session_cookie);

            Cookie identity_cookie = new Cookie("currentUser", user.getName());
            identity_cookie.setMaxAge(3600);
            response.addCookie(identity_cookie);

            user.setSessionId(sessionId);
            userRepository.save(user);

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
                if (cookie.getName() == "currentUser") {
                    User user = userRepository.findByName(cookie.getValue());
                    user.setSessionId(null);
                    userRepository.save(user);
                }
                if (currentUserCookie != null) {
                    currentUserCookie.setMaxAge(0);
                    response.addCookie(currentUserCookie);
                }
            }
        }

        return "Logout Successful!";
    }

    @PostMapping("/authorize")
    public boolean isUserLoggedIn(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        Cookie session_cookie = null;
        Cookie identity_cookie = null;
        User user = null;
        if (cookies != null) {
            for (Cookie cookie: cookies) {
                if (cookie.getName() == "currentUser") {
                    identity_cookie = cookie;
                    user = userRepository.findByName(identity_cookie.getValue());

                } else if (cookie.getName() == "session-id") {
                    session_cookie = cookie;
                }
                if (session_cookie.getValue() == user.getSessionId()) return true;
                else return false;
            }
        } else return false;
        return false;
    }
}
