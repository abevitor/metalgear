package com.foxhound.command_center.controller;

import java.util.List;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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

    @GetMapping
    public List<PersonnelResponse> findAll() {
        return personnelService.findAll();
    }

    @GetMapping("/{id}")
    public PersonnelResponse findById(@PathVariable Long id) {
        return personnelService.findById(id);
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<PersonnelResponse> create(
            @Valid @RequestPart("request") PersonnelRequest request,
            @RequestPart(value = "cardImage", required = false)
            MultipartFile cardImage,
            @RequestPart(value = "modalImage", required = false)
            MultipartFile modalImage) {

        PersonnelResponse created = personnelService.create(request, modalImage, modalImage);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(created);
    }

    @PutMapping(
            value = "/{id}",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public PersonnelResponse update(
            @PathVariable Long id,
            @Valid @RequestPart("request") PersonnelRequest request,
            @RequestPart(value = "cardImage", required = false)
            MultipartFile cardImage,
            @RequestPart(value = "modalImage", required = false)
            MultipartFile modalImage) {

        return personnelService.update(id, request, modalImage, modalImage);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        personnelService.delete(id);
    }
}