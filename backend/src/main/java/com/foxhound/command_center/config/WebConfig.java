package com.foxhound.command_center.config;

import java.nio.file.Path;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    private final Path uploadDirectory;

    public WebConfig(
            @Value("${app.upload.dir:uploads/personnel}") String uploadDir) {

        this.uploadDirectory = Path.of(uploadDir)
                .toAbsolutePath()
                .normalize();
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {

        String location = uploadDirectory.toUri().toString();

        if (!location.endsWith("/")) {
            location += "/";
        }

        registry
                .addResourceHandler("/api/uploads/personnel/**")
                .addResourceLocations(location);
    }
}