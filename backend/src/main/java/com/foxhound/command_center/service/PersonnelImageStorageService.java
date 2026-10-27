package com.foxhound.command_center.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Map;
import java.util.UUID;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

@Service
public class PersonnelImageStorageService {

    private static final Logger LOGGER =
            Logger.getLogger(PersonnelImageStorageService.class.getName());

    private static final String URL_PREFIX = "/api/uploads/personnel/";
    private static final long MAX_FILE_SIZE = 5 * 1024 * 1024;

    private static final Map<String, String> ALLOWED_TYPES = Map.of(
            "image/jpeg", ".jpg",
            "image/png", ".png",
            "image/webp", ".webp",
            "image/jfif", ".jfif"
    );

    private final Path uploadDirectory;

    public PersonnelImageStorageService(
            @Value("${app.upload.dir:uploads/personnel}") String uploadDir) {

        this.uploadDirectory = Path.of(uploadDir)
                .toAbsolutePath()
                .normalize();
    }

    public String store(MultipartFile file) {

        if (file == null || file.isEmpty()) {
            return null;
        }

        if (file.getSize() > MAX_FILE_SIZE) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "A imagem deve ter no máximo 5 MB."
            );
        }

        String contentType = file.getContentType();
        String extension = ALLOWED_TYPES.get(contentType);

        if (extension == null) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Formato inválido. Use imagens JPG, PNG, WEBP ou JFIF."
            );
        }

        String filename = UUID.randomUUID() + extension;
        Path destination = uploadDirectory.resolve(filename).normalize();

        if (!destination.startsWith(uploadDirectory)) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Nome de arquivo inválido."
            );
        }

        try {
            Files.createDirectories(uploadDirectory);

            Files.copy(file.getInputStream(), destination);

            return URL_PREFIX + filename;

        } catch (IOException exception) {
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    "Não foi possível salvar a imagem."
            );
        }
    }

    public void deleteIfManaged(String imageUrl) {

        if (imageUrl == null || !imageUrl.startsWith(URL_PREFIX)) {
            return;
        }

        String filename = imageUrl.substring(URL_PREFIX.length());

        if (filename.isBlank()
                || filename.contains("/")
                || filename.contains("\\")
                || filename.contains("..")) {
            return;
        }

        Path file = uploadDirectory.resolve(filename).normalize();

        if (!file.startsWith(uploadDirectory)) {
            return;
        }

        try {
            Files.deleteIfExists(file);
        } catch (IOException exception) {
            LOGGER.log(
                    Level.WARNING,
                    "Não foi possível excluir a imagem antiga: {0}",
                    filename
            );
        }
    }
}