package asac7.com.PokeNyang.dto;

import asac7.com.PokeNyang.entity.Comment;
import asac7.com.PokeNyang.entity.Post;
import asac7.com.PokeNyang.entity.User;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
@Getter
public class CommentRequestDto {

    String comment;
    Integer userId;
    Integer postId;

    public Comment toEntity(User user, Post post) {
        return new Comment(null, this.comment, LocalDate.now(), user, post);
    }
}