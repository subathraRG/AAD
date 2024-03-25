package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Gift;

public interface GiftRepository extends JpaRepository<Gift, Integer> {

}
// public interface UserRepository extends JpaRepository<User, Integer> {
// Optional<User> findByEmail(String username);

// }
