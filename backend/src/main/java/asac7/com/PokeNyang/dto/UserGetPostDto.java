package asac7.com.PokeNyang.dto;

import asac7.com.PokeNyang.entity.Post;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@FieldDefaults(makeFinal = true , level = AccessLevel.PRIVATE)
@RequiredArgsConstructor
@NoArgsConstructor(force = true)
@Getter
@Setter
public class UserGetPostDto {
    Long id;
    String title;
    String content;
    LocalDate createdAt;

    public UserGetPostDto(Post post) {
        this.id = post.getId();
        this.title = post.getTitle();
        this.content = post.getContent();
        this.createdAt = post.getCreatedAt();
    }

}
