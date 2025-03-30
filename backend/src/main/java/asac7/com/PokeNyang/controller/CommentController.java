package asac7.com.PokeNyang.controller;

import asac7.com.PokeNyang.dto.CommentRequestDto;
import asac7.com.PokeNyang.dto.CommentResponseDto;
import asac7.com.PokeNyang.dto.PostCommentResponseDto;
import asac7.com.PokeNyang.service.CommentService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
@RestController
@RequestMapping("/comment")
public class CommentController {

    CommentService commentService;

    @PostMapping("")
    public ResponseEntity<CommentResponseDto> create(@RequestBody CommentRequestDto dto) {
        CommentResponseDto createComment = commentService.insert(dto);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(createComment);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CommentResponseDto> readComment(@PathVariable(name = "id") Integer id) {
        CommentResponseDto readComment = commentService.findById(id);
        return ResponseEntity.ok(readComment);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<CommentResponseDto> updateComment(@RequestBody CommentRequestDto dto, @PathVariable(name = "id") Integer id) {
        CommentResponseDto updateComment = commentService.updateComment(dto, id);
        return ResponseEntity.ok(updateComment);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteComment(@PathVariable(name = "id") Integer id) {
        commentService.removeComment(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<?> getCommentsByUser(@PathVariable(name = "id") Long userId) {
        List<PostCommentResponseDto> commentResponseDtoList = commentService.findByUserId(userId);

        if (commentResponseDtoList.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(commentResponseDtoList);
    }
}