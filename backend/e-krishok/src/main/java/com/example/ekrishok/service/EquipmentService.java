package com.example.ekrishok.service;

import com.example.ekrishok.model.Equipment;
import com.example.ekrishok.repository.EquipmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EquipmentService {
    @Autowired
    private EquipmentRepository equipmentRepository;

    public List<Equipment> findAll() {
        return equipmentRepository.findAll();
    }

    public Optional<Equipment> findById(Long id) {
        return equipmentRepository.findById(id);
    }

    public Equipment save(Equipment equipment) {
        return equipmentRepository.save(equipment);
    }

    public void deleteById(Long id) {
        equipmentRepository.deleteById(id);
    }

    public List<Equipment> findAvailableEquipment() {
        return equipmentRepository.findByIsAvailableTrue();
    }

    public boolean rentEquipment(Long id) {
        Optional<Equipment> equipmentOpt = equipmentRepository.findById(id);
        if (equipmentOpt.isPresent() && equipmentOpt.get().getIsAvailable()) {
            Equipment equipment = equipmentOpt.get();
            equipment.setIsAvailable(false);
            equipmentRepository.save(equipment);
            return true;
        }
        return false;
    }

    public boolean returnEquipment(Long id) {
        Optional<Equipment> equipmentOpt = equipmentRepository.findById(id);
        if (equipmentOpt.isPresent() && !equipmentOpt.get().getIsAvailable()) {
            Equipment equipment = equipmentOpt.get();
            equipment.setIsAvailable(true);
            equipmentRepository.save(equipment);
            return true;
        }
        return false;
    }
}