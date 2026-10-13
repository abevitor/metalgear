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

    @PostMapping 
    @ResponseStatus(HttpStatus.CREATED)
    public Personnel create(@Valid @RequestBody Personnel personnel) {
        return personnelService.create(personnel);
    }
    
}
