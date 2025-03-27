package asac7.com.PokeNyang.dto;

import lombok.*;
import lombok.experimental.FieldDefaults;

@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
@AllArgsConstructor
@NoArgsConstructor(force = true)  // 기본 생성자 추가
@Getter
public class UserLoginRequestDto {
    String email;
    String password;
}
