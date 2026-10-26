package com.foxhound.command_center.controller;

import java.util.List;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.foxhound.command_center.dto.PersonnelRequest;
import com.foxhound.command_center.dto.PersonnelResponse;
import com.foxhound.command_center.service.PersonnelService;

@RestController
@RequestMapping("/api/personnel")
public class PersonnelController {

    private final PersonnelService personnelService;

    public PersonnelController(PersonnelService personnelService) {
        this.personnelService = personnelService;
    }

    // GET /api/personnel
    @GetMapping
    public List<PersonnelResponse> findAll() {
        return personnelService.findAll();
    }

    // GET /api/personnel/{id}
    @GetMapping("/{id}")
    public PersonnelResponse findById(@PathVariable Long id) {
        return personnelService.findById(id);
    }

    // POST /api/personnel
    @PostMapping
    public ResponseEntity<PersonnelResponse> create(
            @Valid @RequestBody PersonnelRequest request) {

        PersonnelResponse created = personnelService.create(request);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(created);
    }

    // PUT /api/personnel/{id}
    @PutMapping("/{id}")
    public PersonnelResponse update(
            @PathVariable Long id,
            @Valid @RequestBody PersonnelRequest request) {

        return personnelService.update(id, request);
    }

    // DELETE /api/personnel/{id}
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        personnelService.delete(id);
    }
}