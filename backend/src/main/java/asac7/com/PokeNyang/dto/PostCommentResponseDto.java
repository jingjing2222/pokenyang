package asac7.com.PokeNyang.dto;
import asac7.com.PokeNyang.entity.Comment;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class PostCommentResponseDto {
    private PostDto post;
    private CommentDto comment;

    public PostCommentResponseDto(Comment comment) {
        this.post = new PostDto(comment.getPost().getId(), comment.getPost().getTitle());
        this.comment = new CommentDto(comment.getId(), comment.getComment(), comment.getCreatedAt().atStartOfDay());
    }

    @Getter
    static class PostDto {
        private Long id;
        private String title;

        public PostDto(Long id, String title) {
            this.id = id;
            this.title = title;
        }
    }

    @Getter
    static class CommentDto {
        private Long id;
        private String comment;
        private LocalDateTime created_at;

        public CommentDto(Long id, String comment, LocalDateTime created_at) {
            this.id = id;
            this.comment = comment;
            this.created_at = created_at;
        }
    }
}
