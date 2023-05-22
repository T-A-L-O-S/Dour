package com.talos.dour.utils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class PasswordHasher {
    public String hashSHA256(String password) {

        try {
            MessageDigest messageDigest = MessageDigest.getInstance("SHA-256");

            messageDigest.update(password.getBytes());

            byte[] hashedPasswordBytes = messageDigest.digest();

            StringBuilder stringBuilder = new StringBuilder();

            for (byte b: hashedPasswordBytes) {
                stringBuilder.append(String.format("%02x", b));
            }

            String hashedPassword = stringBuilder.toString();

            return hashedPassword;
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        return password;
    }
}
