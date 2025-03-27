package asac7.com.PokeNyang.controller;

import asac7.com.PokeNyang.dto.UserRequestDto;
import asac7.com.PokeNyang.dto.UserResponseDto;
import asac7.com.PokeNyang.entity.User;
import asac7.com.PokeNyang.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @ResponseBody
    @RequestMapping(value = "/retrive/all", method = RequestMethod.GET)
    public ResponseEntity<List<UserResponseDto>> retriveAllUser() {
        List<UserResponseDto> users = userService.findAllUser();
        return ResponseEntity.ok(users);
    }

    @ResponseBody
    @RequestMapping(value = "/retrive/user", method = RequestMethod.GET)
    public ResponseEntity<UserResponseDto> retriveUser(@RequestBody UserRequestDto request) {
        UserResponseDto user = userService.findByUser(request);
        return ResponseEntity.ok(user);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<UserResponseDto> createUser(@RequestBody UserRequestDto request) {
        UserResponseDto createdUser = userService.createUser(request);
        return ResponseEntity.ok(createdUser);
    }

    @ResponseBody
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<UserResponseDto> loginUser(@RequestBody UserResponseDto request) {
        UserResponseDto createdUser = userService.loginUser(request);
        return ResponseEntity.ok(createdUser);
    }


}