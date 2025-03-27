package asac7.com.PokeNyang.dto;

import asac7.com.PokeNyang.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class UserRequestDto {
    private final Long id;

    private final String password;

    private final String name;

    private final String email;

    public User toEntity() {
        return new User(null, this.password, name, email);
    }

    public User toLogin() {
        return new User(this.email, password);
    }
}