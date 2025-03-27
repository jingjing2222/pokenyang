package asac7.com.PokeNyang.dto;

import asac7.com.PokeNyang.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
@NoArgsConstructor(force = true)
public class UserRequestDto {
    private final Long id;

    private final String password;

    private final String name;

    private final String email;

}