package com.foxhound.command_center.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class PersonnelRequest {

    @NotBlank(message = "O código é obrigatorio.")
    @Size(max = 20, message = "O código deve ter no máximo 20 caracteres.")
    String code,

    @NotBlank(message = "O nome é obrigatório.")
    @Size(max = 255, message ="O nome deve ter no máximo 255 caracteres." )
    String name,
    
}
