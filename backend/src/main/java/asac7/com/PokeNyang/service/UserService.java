package asac7.com.PokeNyang.service;

import asac7.com.PokeNyang.dto.UserLoginResponseDto;
import asac7.com.PokeNyang.entity.User;
import asac7.com.PokeNyang.repository.UserRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
public class UserService {

    UserRepository userRepository;

    public UserLoginResponseDto isLogin(String email, String password) {
        User isUser = userRepository.loginUser(email, password);
        if (isUser != null) {
            return new UserLoginResponseDto(true, isUser.getId());
        } else {
            return new UserLoginResponseDto(false, null);
        }
    }

}