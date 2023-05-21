package com.talos.dour.controller;

import com.talos.dour.dto.CartRequest;
import com.talos.dour.exception.ResourceNotFoundException;
import com.talos.dour.model.CartItem;
import com.talos.dour.model.Product;
import com.talos.dour.model.User;
import com.talos.dour.repository.CartItemRepository;
import com.talos.dour.repository.ProductRepository;
import com.talos.dour.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/v1/cart/")
public class CartController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CartItemRepository cartItemRepository;

    @GetMapping("/{id}")
    public ResponseEntity<Set<CartItem>> getCartItems(@PathVariable Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found!"));

        return ResponseEntity.ok(user.getCartItems());
    }

    @PostMapping("/{customer_id}/{product_id}")
    public CartItem addToCart(@PathVariable Long customer_id, @PathVariable Long product_id, @RequestBody CartRequest request) {
        User user = userRepository.findById(customer_id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found!"));

        Product product = productRepository.findById(product_id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found!"));

        CartItem cartItem = new CartItem(user, product, request.getQuantity());
        return cartItemRepository.save(cartItem);
    }

    @PutMapping("/{customer_id}/{product_id}")
    public ResponseEntity<Set<CartItem>> updateCart(@PathVariable Long customer_id, @PathVariable Long product_id, @RequestBody CartRequest request) {
        User user = userRepository.findById(customer_id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found!"));

        Product product = productRepository.findById(product_id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found!"));

        for (CartItem item: user.getCartItems()) {
            if (item.getProduct().getId() == product.getId()) {
                item.setQuantity(request.getQuantity());
                break;
            }
        }

        userRepository.save(user);

        return ResponseEntity.ok(user.getCartItems());
    }

    @DeleteMapping("/{customer_id}/{product_id}")
    public ResponseEntity<Map<String, Boolean>> removeFromCart(@PathVariable Long customer_id, @PathVariable Long product_id) {
        User user = userRepository.findById(customer_id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found!"));

        Product product = productRepository.findById(product_id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found!"));

        Iterator<CartItem> iterator = user.getCartItems().iterator();

        while (iterator.hasNext()) {
            if (iterator.next().getId() == product.getId()) {
                iterator.remove();
                break;
            }
        }

        userRepository.save(user);

        Map<String, Boolean> response = new HashMap<>();
        response.put("Removed from Cart", Boolean.TRUE);

        return ResponseEntity.ok(response);
    }
}