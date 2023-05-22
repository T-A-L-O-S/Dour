package com.talos.dour.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.talos.dour.enums.UserTypeEnum;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "name")
    private String name;
    @Column(name = "email")
    private String email;
    @Column(name = "phone")
    private String phone;
    @Column(name = "type")
    private UserTypeEnum type;

    @JsonIgnore
    @OneToMany(targetEntity = Product.class, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "vendor_id", referencedColumnName = "id")
    private List<Product> productList;

    @JsonIgnore
    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<CartItem> cartItems = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Order> orderHistory;

    public User() {}

    public User(String name, String email, String phone, UserTypeEnum type, List<Product> productList, Set<CartItem> cartItems, List<Order> orderHistory) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.type = type;
        this.productList = productList;
        this.cartItems = cartItems;
        this.orderHistory = orderHistory;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public UserTypeEnum getType() {
        return type;
    }

    public void setType(UserTypeEnum type) {
        this.type = type;
    }

    public List<Product> getProductList() {
        return productList;
    }

    public void setProductList(List<Product> productList) {
        this.productList = productList;
    }

    public Set<CartItem> getCartItems() {
        return cartItems;
    }

    public void setCartItems(Set<CartItem> cartItems) {
        this.cartItems = cartItems;
    }

    public List<Order> getOrderHistory() {
        return orderHistory;
    }

    public void setOrderHistory(List<Order> orderHistory) {
        this.orderHistory = orderHistory;
    }
}
