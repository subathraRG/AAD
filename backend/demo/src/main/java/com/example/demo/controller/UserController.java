package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Gift;
import com.example.demo.model.User;
import com.example.demo.service.UserService;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    // update gift
    @PutMapping("updategift/{id}")
    public ResponseEntity<?> updateGift(@NonNull @PathVariable int id,
            @RequestBody Gift updateRequest) {
        Gift updated = userService.updateGift(id, updateRequest);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    // update user
    @PutMapping("updateuser/{id}")
    public ResponseEntity<User> updateUser(@NonNull @PathVariable int id,
            @RequestBody User updateRequest) {
        User updated = userService.updateUser(id, updateRequest);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    // delete user
    @DeleteMapping("deleteuser/{userId}")
    public ResponseEntity<Void> deleteUser(@NonNull @PathVariable Integer userId) {
        System.out.println(userId);
        userService.removeUser(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // delete gift
    @DeleteMapping("deletegift/{userId}")
    public ResponseEntity<Void> deleteGift(@NonNull @PathVariable Integer userId) {
        System.out.println(userId);
        userService.removeGift(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // get all user
    @GetMapping("/getuser")
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    // get all gift
    @GetMapping("/getgift")
    public ResponseEntity<?> getGift() {
        var g = userService.getGift();
        return new ResponseEntity<>(g, HttpStatus.OK);
    }

    // add gift
    @PostMapping("/addgift")
    public ResponseEntity<?> addGift(@RequestBody Gift gift) {
        System.out.println(gift);
        Gift g = userService.createGift(gift);
        return new ResponseEntity<>(g, HttpStatus.CREATED);
    }

    // profile
    @GetMapping("/profile")
    public ResponseEntity<?> profile(@RequestParam("email") String user) {
        System.out.println(user);
        var profile = userService.getUserByEmail(user);
        return new ResponseEntity<>(profile, HttpStatus.OK);
    }

    // create user
    @PostMapping("/createuser")
    public ResponseEntity<User> createUser(@NonNull @RequestBody User user) {
        User createdUser = userService.createUser(user);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    // @GetMapping("readUser/{email}")
    // @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    // public ResponseEntity<?> getUserByEmail(@PathVariable String email) {
    // Optional<User> user = userService.getUserByEmail(email);
    // return user.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
    // .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    // }

    // @GetMapping("/readUsers")
    // @PreAuthorize("hasAuthority('ADMIN')")
    // public ResponseEntity<List<User>> getAllUsers() {
    // List<User> users = userService.getAllUsers();
    // return new ResponseEntity<>(users, HttpStatus.OK);
    // }

    // @PutMapping("updateUser/{email}")
    // @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    // public ResponseEntity<User> updateUser(@NonNull @PathVariable String email,
    // @RequestBody UpdateRequest updateRequest) {
    // User updated = userService.updateUser(email, updateRequest);
    // return new ResponseEntity<>(updated, HttpStatus.OK);
    // }

    // @DeleteMapping("deleteUser/{userId}")
    // @PreAuthorize("hasAuthority('ADMIN')")
    // public ResponseEntity<Void> removeUser(@NonNull @PathVariable Integer userId)
    // {
    // userService.removeUser(userId);
    // return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    // }
}
