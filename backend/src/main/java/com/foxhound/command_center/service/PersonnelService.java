package com.foxhound.command_center.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.foxhound.command_center.entity.Personnel;
import com.foxhound.command_center.repository.PersonnelRepository;

@Service 
public class PersonnelService {

    private final PersonnelRepository personnelRepository;

    public PersonnelService(PersonnelRepository personnelRepository){
        this.personnelRepository = personnelRepository;
    }

    public List<Personnel> findAll(){
        return personnelRepository.findAll();
    }

    public Personnel findById(Long id) {
        return personnelRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Agente não encontrado."
                ));
    }

    public Personnel create(Personnel personnel) {
        if(personnelRepository.existsByCode(personnel.getCode())) {
            throw new ResponseStatusException(
                HttpStatus.CONFLICT,
                "Já existe um agente com esse código"
            );
        }

        personnel.setId(null);

        return personnelRepository.save(personnel);
    }

    public Personnel update(Long id, Personnel updatedPersonnel) {

        Personnel existingPersonnel = findById(id);

        if(personnelRepository.existsByCodeAndIdNot(updatedPersonnel.getCode(), id)) {

            throw new ResponseStatusException(HttpStatus.CONFLICT,
                "Já existe outro agente com esse código"
            );
        }

        existingPersonnel.setCode(updatedPersonnel.getCode());
        existingPersonnel.setName(updatedPersonnel.getName());
        existingPersonnel.setCodename(updatedPersonnel.getCodename());
        existingPersonnel.setAffiliation(updatedPersonnel.getAffiliation());
        existingPersonnel.setStatus(updatedPersonnel.getStatus());
        existingPersonnel.setSpecialty(updatedPersonnel.getSpecialty());
        existingPersonnel.setCardImage(updatedPersonnel.getCardImage());
        existingPersonnel.setModalImage(updatedPersonnel.getModalImage());
        existingPersonnel.setHistory(updatedPersonnel.getHistory());

        return personnelRepository.save(existingPersonnel);
    }

    public void delete(Long id) {
        Personnel personnel = findById(id);

        personnelRepository.delete(personnel);
    }
    
}
