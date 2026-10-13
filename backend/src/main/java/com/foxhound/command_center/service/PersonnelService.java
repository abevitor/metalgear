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
    
}
