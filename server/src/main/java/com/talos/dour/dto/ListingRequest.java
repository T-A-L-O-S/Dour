package com.talos.dour.dto;

import com.talos.dour.model.User;

public class ListingRequest {
    private User user;

    public ListingRequest() {}

    public ListingRequest(User user) {
        this.user = user;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
