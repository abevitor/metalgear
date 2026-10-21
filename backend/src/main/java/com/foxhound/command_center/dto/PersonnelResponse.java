package com.foxhound.command_center.dto;

public record PersonnelResponse(

        Long id,
        String code,
        String name,
        String codename,
        String affiliation,
        String status,
        String specialty,
        String cardImage,
        String modalImage,
        String history

) {
}
