package com.foxhound.command_center.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import com.foxhound.command_center.dto.PersonnelRequest;
import com.foxhound.command_center.dto.PersonnelResponse;
import com.foxhound.command_center.entity.Personnel;
import com.foxhound.command_center.repository.PersonnelRepository;

@Service
public class PersonnelService {

    private final PersonnelRepository personnelRepository;
    private final PersonnelImageStorageService imageStorageService;

    public PersonnelService(
            PersonnelRepository personnelRepository,
            PersonnelImageStorageService imageStorageService) {

        this.personnelRepository = personnelRepository;
        this.imageStorageService = imageStorageService;
    }

    public List<PersonnelResponse> findAll() {
        return personnelRepository.findAll()
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public PersonnelResponse findById(Long id) {
        return toResponse(findEntityById(id));
    }

    @Transactional
    public PersonnelResponse create(
            PersonnelRequest request,
            MultipartFile cardImage,
            MultipartFile modalImage) {

        if (personnelRepository.existsByCode(request.code())) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    "Já existe um agente com esse código."
            );
        }

        Personnel personnel = new Personnel();
        copyRequestToEntity(request, personnel);

        if (hasFile(cardImage)) {
            personnel.setCardImage(imageStorageService.store(cardImage));
        }

        if (hasFile(modalImage)) {
            personnel.setModalImage(imageStorageService.store(modalImage));
        }

        Personnel savedPersonnel = personnelRepository.save(personnel);

        return toResponse(savedPersonnel);
    }

    @Transactional
    public PersonnelResponse update(
            Long id,
            PersonnelRequest request,
            MultipartFile cardImage,
            MultipartFile modalImage) {

        Personnel existingPersonnel = findEntityById(id);

        if (personnelRepository.existsByCodeAndIdNot(
                request.code(), id)) {

            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    "Já existe outro agente com esse código."
            );
        }

        String oldCardImage = existingPersonnel.getCardImage();
        String oldModalImage = existingPersonnel.getModalImage();

        copyRequestToEntity(request, existingPersonnel);

        if (hasFile(cardImage)) {
            existingPersonnel.setCardImage(
                    imageStorageService.store(cardImage)
            );
        }

        if (hasFile(modalImage)) {
            existingPersonnel.setModalImage(
                    imageStorageService.store(modalImage)
            );
        }

        Personnel savedPersonnel =
                personnelRepository.save(existingPersonnel);

        if (hasFile(cardImage)) {
            imageStorageService.deleteIfManaged(oldCardImage);
        }

        if (hasFile(modalImage)) {
            imageStorageService.deleteIfManaged(oldModalImage);
        }

        return toResponse(savedPersonnel);
    }

    @Transactional
    public void delete(Long id) {

        Personnel personnel = findEntityById(id);

        String cardImage = personnel.getCardImage();
        String modalImage = personnel.getModalImage();

        personnelRepository.delete(personnel);

        imageStorageService.deleteIfManaged(cardImage);
        imageStorageService.deleteIfManaged(modalImage);
    }

    private boolean hasFile(MultipartFile file) {
        return file != null && !file.isEmpty();
    }

    private Personnel findEntityById(Long id) {
        return personnelRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Agente não encontrado."
                ));
    }

    private void copyRequestToEntity(
            PersonnelRequest request,
            Personnel personnel) {

        personnel.setCode(request.code());
        personnel.setName(request.name());
        personnel.setCodename(request.codename());
        personnel.setAffiliation(request.affiliation());
        personnel.setStatus(request.status());
        personnel.setSpecialty(request.specialty());
        personnel.setCardImage(request.cardImage());
        personnel.setModalImage(request.modalImage());
        personnel.setHistory(request.history());
    }

    private PersonnelResponse toResponse(Personnel personnel) {

        return new PersonnelResponse(
                personnel.getId(),
                personnel.getCode(),
                personnel.getName(),
                personnel.getCodename(),
                personnel.getAffiliation(),
                personnel.getStatus(),
                personnel.getSpecialty(),
                personnel.getCardImage(),
                personnel.getModalImage(),
                personnel.getHistory()
        );
    }
}