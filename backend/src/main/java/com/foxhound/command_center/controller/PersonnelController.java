package com.foxhound.command_center.controller;

import java.util.List;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.foxhound.command_center.entity.Personnel;
import com.foxhound.command_center.service.PersonnelService;


@RestController 
@RequestMapping("/api/personnel")
public class PersonnelController {

    private final PersonnelService personnelService;

    public PersonnelController(PersonnelService personnelService) {
        this.personnelService = personnelService;
    }

    @GetMapping 
    public List<Personnel> findAll() {
        return personnelService.findAll();
    }

    @GetMapping("/{id")
    public Personnel findById(@PathVariable Long id) {
        return personnelService.findById(id);
    }

    @PostMapping 
    @ResponseStatus(HttpStatus.CREATED)
    public Personnel create(@Valid @RequestBody Personnel personnel) {
        return personnelService.create(personnel);
    }

    @PutMapping("/{id}")
    public Personnel update(
        @PathVariable Long id,
        @Valid @RequestBody Personnel personnel
    ) {
        return personnelService.update(id, personnel);
    }
    
}
