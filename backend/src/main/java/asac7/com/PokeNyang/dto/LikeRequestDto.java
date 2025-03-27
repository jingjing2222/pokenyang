package asac7.com.PokeNyang.dto;


import asac7.com.PokeNyang.entity.Like;
import asac7.com.PokeNyang.entity.Post;
import asac7.com.PokeNyang.entity.User;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@Getter
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
public class LikeRequestDto {

    private Integer postId;
    private Integer userId;

    public Like toEntity(User user, Post post) {
        return new Like(null, user, post);
    }
}