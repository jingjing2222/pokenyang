package asac7.com.PokeNyang.controller;


import asac7.com.PokeNyang.dto.LikeRequestDto;
import asac7.com.PokeNyang.dto.LikeResponseDto;
import asac7.com.PokeNyang.entity.Like;
import asac7.com.PokeNyang.service.LikeService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
@RequestMapping("/like")
public class LikeController {

    LikeService likeService;

    @PostMapping("/")
    public ResponseEntity<LikeResponseDto> save(@RequestBody LikeRequestDto dto) {
        LikeResponseDto savedLike = likeService.click(dto);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedLike);
    }

    @GetMapping("/likeAll")
    public ResponseEntity<List<LikeResponseDto>> listAll() {
        List<Like> readALl = likeService.likeCount();
        readALl.forEach(System.out::println);
        return null;
    }
}
