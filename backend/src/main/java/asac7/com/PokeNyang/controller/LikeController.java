package asac7.com.PokeNyang.controller;

import asac7.com.PokeNyang.dto.LikeRequestDto;
import asac7.com.PokeNyang.service.LikeService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
@RequestMapping("/likes")
public class LikeController {

    LikeService likeService;

    @PostMapping("")
    public ResponseEntity<Boolean> toggleLike(@RequestBody LikeRequestDto dto) {
        return ResponseEntity.ok(likeService.toggleLike(dto));
    }

    @GetMapping("/count/{id}")
    public ResponseEntity<Integer> postCount(@PathVariable(name = "id") Integer id) {
        return ResponseEntity.ok(likeService.getLikeCount(id));
    }
}
