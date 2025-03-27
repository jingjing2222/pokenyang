package asac7.com.PokeNyang.dto;


import asac7.com.PokeNyang.entity.User;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public class UserResponseDto {
    private final Long id;

    private final String password;

    private final String name;

    private final String email;

    public static UserResponseDto from(User entity) {
        return new UserResponseDto(
                entity.getId(),
                entity.getPassword(),
                entity.getName(),
                entity.getEmail()
        );
    }
}