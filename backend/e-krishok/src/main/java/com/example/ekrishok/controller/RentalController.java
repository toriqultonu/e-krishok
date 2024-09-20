package com.example.ekrishok.controller;

import com.example.ekrishok.model.Equipment;
import com.example.ekrishok.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rentals")
public class RentalController {

    @Autowired
    private EquipmentService equipmentService;

    @GetMapping("/available")
    public List<Equipment> getAvailableEquipment() {
        return equipmentService.findAvailableEquipment();
    }

    @PostMapping("/rent/{id}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> rentEquipment(@PathVariable Long id) {
        boolean success = equipmentService.rentEquipment(id);
        if (success) {
            return ResponseEntity.ok("Equipment rented successfully");
        } else {
            return ResponseEntity.badRequest().body("Equipment not available for rent");
        }
    }

    @PostMapping("/return/{id}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> returnEquipment(@PathVariable Long id) {
        boolean success = equipmentService.returnEquipment(id);
        if (success) {
            return ResponseEntity.ok("Equipment returned successfully");
        } else {
            return ResponseEntity.badRequest().body("Equipment return failed");
        }
    }
}