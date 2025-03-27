package asac7.com.PokeNyang.service;

import asac7.com.PokeNyang.dto.*;
import asac7.com.PokeNyang.entity.Post;
import asac7.com.PokeNyang.entity.User;
import asac7.com.PokeNyang.repository.UserInterface;
import asac7.com.PokeNyang.repository.UserRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
public class UserService {

    UserRepository userRepository;
    UserInterface userInterface;

    public UserLoginResponseDto isLogin(String email, String password) {
        User isUser = userRepository.loginUser(email, password);
        if (isUser != null) {
            return new UserLoginResponseDto(true, isUser.getId());
        } else {
            return new UserLoginResponseDto(false, null);
        }
    }

    public UserBuilderDto registerUser(UserBuilderDto requestDto){
        User user = User.builder()
                .password(requestDto.getPassword())
                .name(requestDto.getName())
                .email(requestDto.getEmail())
                .build();
        User registerUser = userInterface.save(user);
        return UserBuilderDto.builder()
                .id(registerUser.getId())
                .password(registerUser.getPassword())
                .name(registerUser.getName())
                .email(registerUser.getEmail())
                .build();
    }

    @Transactional(readOnly = true)
    public List<UserGetPostDto> getPostIdsByUserId(Long userId) {
        List<Post> posts = userRepository.findPostsByUserId(userId);

        return posts.stream()
                .map(UserGetPostDto::new)
                .toList();
    }
}