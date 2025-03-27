package asac7.com.PokeNyang.dto;

import asac7.com.PokeNyang.entity.Comment;
import asac7.com.PokeNyang.entity.Post;
import asac7.com.PokeNyang.entity.User;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Getter
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true)
public class CommentResponseDto {

    private Long id;
    private String comment;
    private LocalDate createdAt;
    private Long user;
    private Long post;

    public static CommentResponseDto from(Comment comment) {
        return new CommentResponseDto(
                comment.getId(),
                comment.getComment(),
                comment.getCreatedAt(),
                comment.getUser().getId(),
                comment.getPost().getId()
        );
    }
}