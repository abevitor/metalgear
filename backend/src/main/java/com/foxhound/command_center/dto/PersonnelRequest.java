package com.foxhound.command_center.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;



public record PersonnelRequest(

        @NotBlank(message = "O código é obrigatório.")
        @Size(max = 20, message = "O código deve ter no máximo 20 caracteres.")
        String code,

        @NotBlank(message = "O nome é obrigatório.")
        @Size(max = 255, message = "O nome deve ter no máximo 255 caracteres.")
        String name,

        @NotBlank(message = "O codinome é obrigatório.")
        @Size(max = 255, message = "O codinome deve ter no máximo 255 caracteres.")
        String codename,

        @Size(max = 255, message = "A afiliação deve ter no máximo 255 caracteres.")
        String affiliation,

        @Size(max = 255, message = "O status deve ter no máximo 255 caracteres.")
        String status,

        @Size(max = 255, message = "A especialidade deve ter no máximo 255 caracteres.")
        String specialty,

        @Size(max = 500, message = "O caminho da imagem deve ter no máximo 500 caracteres.")
        String cardImage,

        @Size(max = 500, message = "O caminho da imagem deve ter no máximo 500 caracteres.")
        String modalImage,

        String history

) {
}
