package com.talos.dour.repository;

import com.talos.dour.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByNameAndPassword(String username, String password);
    User findByName(String username);
}
