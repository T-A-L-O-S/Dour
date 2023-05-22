package com.talos.dour.controller;

import com.talos.dour.exception.ResourceNotFoundException;
import com.talos.dour.model.CartItem;
import com.talos.dour.model.Order;
import com.talos.dour.model.User;
import com.talos.dour.repository.CartItemRepository;
import com.talos.dour.repository.OrderRepository;
import com.talos.dour.repository.ProductRepository;
import com.talos.dour.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/v1/order/")
public class OrderController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private OrderRepository orderRepository;

    @GetMapping("/{id}")
    public List<Order> getOrderHistory(@PathVariable Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found!"));
        return user.getOrderHistory();
    }

    @PostMapping("/{id}")
    public Order addOrderHistory(@PathVariable Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found!"));

        Set<CartItem> cartItems = user.getCartItems();
        Iterator<CartItem> iterator = cartItems.iterator();

        int total = 0;

        while (iterator.hasNext()) {
            CartItem item = iterator.next();
            total += item.getQuantity() * item.getProduct().getPrice();
        }

        Order history = new Order(user, LocalDateTime.now(), total);
        user.getCartItems().clear();
        user.getOrderHistory().add(history);

        userRepository.save(user);

        return user.getOrderHistory().get(user.getOrderHistory().size() - 1);
    }
}
