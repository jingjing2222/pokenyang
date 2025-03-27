package asac7.com.PokeNyang.service;

import asac7.com.PokeNyang.dto.UserRequestDto;
import asac7.com.PokeNyang.dto.UserResponseDto;
import asac7.com.PokeNyang.entity.User;
import asac7.com.PokeNyang.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    @Transactional(readOnly = true)
    public List<UserResponseDto> findAllUser() {
        List<User> retrived = userRepository.findAll();
        return retrived.stream().map(UserResponseDto::of).toList();
    }

    @Transactional
    public UserResponseDto createUser(UserRequestDto request) {
        User toSave = request.toEntity();
        User saved = userRepository.save(toSave);
        return UserResponseDto.from(saved);
    }
}
