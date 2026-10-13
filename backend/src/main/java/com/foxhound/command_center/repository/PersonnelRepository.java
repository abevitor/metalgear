package com.foxhound.command_center.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foxhound.command_center.entity.Personnel;

public interface PersonnelRepository extends JpaRepository<Personnel, Long> {

    boolean existsByCode(String code);
    
}
