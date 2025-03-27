package asac7.com.PokeNyang.controller;

import asac7.com.PokeNyang.entity.User;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/api/users")
public class UserController {

    private UserService userService;

    @ResponseBody
    @RequestMapping(value = "", method = RequestMethod.GET)
    public ResponseEntity<List<UserResponseDto>> retriveAllUser() {
        List<UserResponseDto> users = userService.findAllUser();
        return ResponseEntity.ok(users);
    }

    @ResponseBody
    @RequestMapping(value = "", method = RequestMethod.POST)
    public ResponseEntity<UserResponseDto> createUser(@ResponseBody UserResponseDto request) {
        UserResponseDto createdUser = userService.createUser(request);
        return ResponseEntity.ok(createdUser);
    }


}
