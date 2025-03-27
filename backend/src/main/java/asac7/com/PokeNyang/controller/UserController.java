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
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;


}