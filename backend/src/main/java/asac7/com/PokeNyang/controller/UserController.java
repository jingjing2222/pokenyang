package asac7.com.PokeNyang.controller;

import asac7.com.PokeNyang.dto.UserLoginRequestDto;
import asac7.com.PokeNyang.dto.UserLoginResponseDto;
import asac7.com.PokeNyang.service.UserService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
public class UserController {

    UserService userService;

    @PostMapping("/login")
    public UserLoginResponseDto isLogin(@RequestBody UserLoginRequestDto dto) {
        UserLoginResponseDto isLogin = userService.isLogin(dto.getEmail(), dto.getPassword());
        return isLogin;
    }

}