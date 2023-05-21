package com.talos.dour.controller;

import com.talos.dour.dto.ListingRequest;
import com.talos.dour.exception.ResourceNotFoundException;
import com.talos.dour.model.Product;
import com.talos.dour.model.User;
import com.talos.dour.repository.ProductRepository;
import com.talos.dour.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/listing/")
public class ListingController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    @PostMapping("/create/{id}")
    public User createListing(@RequestBody Product product, @PathVariable Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found!"));

        user.getProductList().add(product);

        return userRepository.save(user);
    }

    @GetMapping("/{id}")
    public List<Product> getAllListingsByVendor(@PathVariable Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found!"));

        return user.getProductList();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<User> updateListing(@PathVariable Long id, @RequestBody Product productDetails) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found!"));

        for (Product product: user.getProductList()) {
            if (product.getId() == productDetails.getId()) {
                product.setName(productDetails.getName());
                product.setPrice(productDetails.getPrice());
                product.setImagePath(productDetails.getImagePath());
                product.setCategory(productDetails.getCategory());
                break;
            }
        }

        User updatedUser = userRepository.save(user);

        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteListing(@PathVariable Long id, @RequestBody Product target) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found!"));

        Iterator<Product> iterator = user.getProductList().iterator();

        while (iterator.hasNext()) {
            if (iterator.next().getId() == target.getId()) {
                iterator.remove();
                break;
            }
        }

        userRepository.save(user);

        Map<String, Boolean> response = new HashMap<>();
        response.put("Product Deleted", Boolean.TRUE);

        return ResponseEntity.ok(response);
    }
}
