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
    private static final String PROFILE_IMAGE_DIR = "C:/profileImages";  // 프로필 이미지 경로

    // 이미지 다운로드 및 웹에서 보기 위한 처리
    @GetMapping("/{fileName:.+}")  // 올바른 URL 패턴을 사용
    public ResponseEntity<Resource> getUploadImage(@PathVariable(name="{fileName:.+}") String fileName) {  // PathVariable로 fileName을 받음
        try {
            // 파일 경로 설정
            Path filePath = Paths.get(UPLOAD_DIR, fileName).toAbsolutePath().normalize();
            Resource resource = new UrlResource(filePath.toUri());

            // 파일 존재 여부 확인
            if (resource.exists()) {
                // Content-Type 설정
                String contentType = Files.probeContentType(filePath);
                if (contentType == null) {
                    contentType = "application/octet-stream";
                }

                return ResponseEntity.ok()
                        .contentType(MediaType.parseMediaType(contentType))  // 콘텐츠 타입을 자동으로 설정
                        .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + resource.getFilename() + "\"") // 인라인으로 이미지를 표시
                        .body(resource);  // Resource를 응답 본문에 포함
            } else {
                return ResponseEntity.notFound().build();  // 이미지가 없을 경우 404 응답
            }
        } catch (IOException e) {
            return ResponseEntity.badRequest().build();  // IO 오류 발생 시 400 응답
        }
    }

    // 프로필 이미지 다운로드 및 웹에서 보기 위한 처리
    @GetMapping("/profileImage/{fileName:.+}")
    public ResponseEntity<Resource> getProfileImage(@PathVariable String fileName) {  // PathVariable로 fileName을 받음
        try {
            // 파일 경로 설정
            Path filePath = Paths.get(PROFILE_IMAGE_DIR, fileName).toAbsolutePath().normalize();
            Resource resource = new UrlResource(filePath.toUri());

            // 파일 존재 여부 확인
            if (resource.exists()) {
                // Content-Type 설정
                String contentType = Files.probeContentType(filePath);
                if (contentType == null) {
                    contentType = "application/octet-stream";
                }

                return ResponseEntity.ok()
                        .contentType(MediaType.parseMediaType(contentType))  // 콘텐츠 타입을 자동으로 설정
                        .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + resource.getFilename() + "\"") // 인라인으로 이미지를 표시
                        .body(resource);  // Resource를 응답 본문에 포함
            } else {
                return ResponseEntity.notFound().build();  // 이미지가 없을 경우 404 응답
            }
        } catch (IOException e) {
            return ResponseEntity.badRequest().build();  // IO 오류 발생 시 400 응답
        }
    }

    // 이미지 업로드 처리
    @PostMapping
    public ResponseEntity<String> uploadImage(@RequestParam(name = "file") MultipartFile file) {
        try {
            // 저장할 디렉토리 경로 설정
            String filePath = Paths.get(UPLOAD_DIR, file.getOriginalFilename()).toString();

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
