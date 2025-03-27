package asac7.com.PokeNyang.controller;

import asac7.com.PokeNyang.dto.PostDto;
import asac7.com.PokeNyang.dto.PostRequestDto;
import asac7.com.PokeNyang.dto.PostResponseDto;
import asac7.com.PokeNyang.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @PostMapping
    public ResponseEntity<PostDto> createPost(@RequestBody PostDto requestDTO) {
        return ResponseEntity.ok(postService.createPost(requestDTO));
    }

    @GetMapping
    public ResponseEntity<List<PostDto>> getAllPosts() {
        return ResponseEntity.ok(postService.getAllPosts());
    }

    @GetMapping("/{idd}")
    public ResponseEntity<PostDto> getPostById(@PathVariable Long id) {

        return ResponseEntity.ok(postService.getPostById(id));
        //return null;
    }

    @PutMapping("/{id}")
    public ResponseEntity<PostResponseDto> updatePost(@PathVariable Long id, @RequestBody PostRequestDto requestDTO) {
        return ResponseEntity.ok(postService.updatePost(id, requestDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable Long id) {
        postService.deletePost(id);
        return ResponseEntity.noContent().build();
    }
}
