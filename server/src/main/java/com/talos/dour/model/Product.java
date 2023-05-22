package com.talos.dour.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.talos.dour.enums.ProductCategoryEnum;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private int price;

    @Column(name = "imagePath")
    private String imagePath;

    @Column(name = "category")
    private ProductCategoryEnum category;

    @JsonIgnore
    @OneToMany(mappedBy = "product")
    private Set<CartItem> assignedCart = new HashSet<>();

    public Product() {}

    public Product(String name, int price, String imagePath, ProductCategoryEnum category, Set<CartItem> assignedCart) {
        this.name = name;
        this.price = price;
        this.imagePath = imagePath;
        this.category = category;
        this.assignedCart = assignedCart;
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

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public ProductCategoryEnum getCategory() {
        return category;
    }

    public void setCategory(ProductCategoryEnum category) {
        this.category = category;
    }

    public Set<CartItem> getAssignedCart() {
        return assignedCart;
    }

    public void setAssignedCart(Set<CartItem> assignedCart) {
        this.assignedCart = assignedCart;
    }
}
