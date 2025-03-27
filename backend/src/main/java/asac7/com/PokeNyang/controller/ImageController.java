package asac7.com.PokeNyang.controller;

import asac7.com.PokeNyang.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/upload")
@RequiredArgsConstructor
public class ImageController {

    private final ImageService imageService;
    private static final String UPLOAD_DIR = "C:/images";  // 로컬 저장 경로
    private static final String PROFILE_IMAGE_DIR = "C:/profileImages";


    @GetMapping("/{fileName:.+}")
    public ResponseEntity<byte[]> getUploadImage(@PathVariable(name="/{fileName:.+}") String fileName) {
        try {
            // 파일 경로 설정
            Path filePath = Paths.get(UPLOAD_DIR + File.separator + fileName).toAbsolutePath().normalize();
            Resource resource = new UrlResource(filePath.toUri());

            // 파일 존재 여부 확인
            if (resource.exists()) {
                // 이미지 파일을 바이트 배열로 읽어옴
                byte[] imageBytes = Files.readAllBytes(filePath);

                // Content-Type 설정
                String contentType = Files.probeContentType(filePath);
                if (contentType == null) {
                    contentType = "application/octet-stream";
                }

                return ResponseEntity.ok()
                        .contentType(MediaType.parseMediaType(contentType))
                        .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + resource.getFilename() + "\"")
                        .body(imageBytes);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (IOException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/profileImage/{fileName:.+}")
    public ResponseEntity<byte[]> getProfileImage(@PathVariable String fileName) {
        try {
            // 파일 경로 설정
            Path filePath = Paths.get(PROFILE_IMAGE_DIR + File.separator + fileName).toAbsolutePath().normalize();
            Resource resource = new UrlResource(filePath.toUri());

            // 파일 존재 여부 확인
            if (resource.exists()) {
                // 이미지 파일을 바이트 배열로 읽어옴
                byte[] imageBytes = Files.readAllBytes(filePath);

                // Content-Type 설정
                String contentType = Files.probeContentType(filePath);
                if (contentType == null) {
                    contentType = "application/octet-stream";
                }

                return ResponseEntity.ok()
                        .contentType(MediaType.parseMediaType(contentType))
                        .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + resource.getFilename() + "\"")
                        .body(imageBytes);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (IOException e) {
            return ResponseEntity.badRequest().build();
        }
    }
    @PostMapping
    public ResponseEntity<String> uploadImage(@RequestParam(name="file") MultipartFile file) {
        try {
            // 저장할 디렉토리 경로 설정
            String filePath = UPLOAD_DIR + File.separator + file.getOriginalFilename();

            // 디렉토리 없으면 생성
            File uploadDir = new File(UPLOAD_DIR);
            if (!uploadDir.exists()) {
                uploadDir.mkdirs();
            }

            // 파일 저장
            file.transferTo(Paths.get(filePath).toFile());

            return ResponseEntity.ok("파일 업로드 성공: " + file.getOriginalFilename());
        } catch (IOException e) {
            return ResponseEntity.badRequest().body("파일 업로드 실패");
        }
    }


}