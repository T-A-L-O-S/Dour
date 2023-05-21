package com.talos.dour.dto;

import com.talos.dour.model.Product;
import com.talos.dour.model.User;

public class CartRequest {
    private int quantity;

    public CartRequest() {}

    public CartRequest(int quantity) {
        this.quantity = quantity;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
