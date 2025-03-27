package asac7.com.PokeNyang.controller;

import asac7.com.PokeNyang.dto.*;
import asac7.com.PokeNyang.entity.Post;
import asac7.com.PokeNyang.service.UserService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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


    @PostMapping("/register")
    public ResponseEntity<UserBuilderDto> register(@RequestBody UserBuilderDto requestDto) {
        return ResponseEntity.ok(userService.registerUser(requestDto));
    }

    @GetMapping("/post/{id}")
    public ResponseEntity<List<UserGetPostDto>> getCommentsByUser(@PathVariable(name = "id") Long userId) {
        return ResponseEntity.ok(userService.getPostIdsByUserId(userId));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteMember(@PathVariable(name = "id") Integer id) {
        userService.removeUser(id);
    }

}