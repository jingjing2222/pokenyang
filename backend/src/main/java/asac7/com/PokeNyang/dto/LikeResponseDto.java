package asac7.com.PokeNyang.dto;

import asac7.com.PokeNyang.entity.Like;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@Getter
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
public class LikeResponseDto {

    private Long id;
    private Long user;
    private Long post;

    public static LikeResponseDto from(Like like) {
        return new LikeResponseDto(
                like.getId(),
                like.getUser().getId(),
                like.getPost().getId()
        );
    }
}