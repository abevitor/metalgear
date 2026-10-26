package com.foxhound.command_center.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.foxhound.command_center.dto.PersonnelRequest;
import com.foxhound.command_center.dto.PersonnelResponse;
import com.foxhound.command_center.entity.Personnel;
import com.foxhound.command_center.repository.PersonnelRepository;

@Service
public class PersonnelService {

    private final PersonnelRepository personnelRepository;

    public PersonnelService(PersonnelRepository personnelRepository) {
        this.personnelRepository = personnelRepository;
    }

    // Lista todos os agentes
    public List<PersonnelResponse> findAll() {
        return personnelRepository.findAll()
                .stream()
                .map(this::toResponse)
                .toList();
    }

    // Busca um agente pelo ID
    public PersonnelResponse findById(Long id) {
        return toResponse(findEntityById(id));
    }

    // Cadastra um novo agente
    public PersonnelResponse create(PersonnelRequest request) {

        if (personnelRepository.existsByCode(request.code())) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    "Já existe um agente com esse código."
            );
        }

        Personnel personnel = new Personnel();
        copyRequestToEntity(request, personnel);

        Personnel savedPersonnel = personnelRepository.save(personnel);

        return toResponse(savedPersonnel);
    }

    // Atualiza um agente existente
    public PersonnelResponse update(
            Long id,
            PersonnelRequest request) {

        Personnel existingPersonnel = findEntityById(id);

        if (personnelRepository.existsByCodeAndIdNot(
                request.code(), id)) {

            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    "Já existe outro agente com esse código."
            );
        }

        copyRequestToEntity(request, existingPersonnel);

        Personnel savedPersonnel =
                personnelRepository.save(existingPersonnel);

        return toResponse(savedPersonnel);
    }

    // Exclui um agente
    public void delete(Long id) {

        Personnel personnel = findEntityById(id);

        personnelRepository.delete(personnel);
    }

    // Busca a entidade ou lança um erro 404
    private Personnel findEntityById(Long id) {
        return personnelRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Agente não encontrado."
                ));
    }

    // Copia os dados do DTO para a entidade JPA
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

    // Converte a entidade JPA em DTO de resposta
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