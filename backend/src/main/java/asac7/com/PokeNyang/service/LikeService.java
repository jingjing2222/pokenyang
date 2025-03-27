package asac7.com.PokeNyang.service;

import asac7.com.PokeNyang.dto.LikeRequestDto;
import asac7.com.PokeNyang.dto.LikeResponseDto;
import asac7.com.PokeNyang.entity.Like;
import asac7.com.PokeNyang.entity.Post;
import asac7.com.PokeNyang.entity.User;
import asac7.com.PokeNyang.repository.LikeInterface;
import asac7.com.PokeNyang.repository.PostInterface;
import asac7.com.PokeNyang.repository.UserInterface;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
@Service
public class LikeService {

    LikeInterface likeInterface;
    PostInterface postInterface;
    UserInterface userInterface;

    public LikeResponseDto click(LikeRequestDto dto) {

        User user = userInterface.findById(dto.getUserId())
                .orElseThrow(() -> new RuntimeException("[Like Click] Can't find User"));

        Post post = postInterface.findById(dto.getUserId())
                .orElseThrow(() -> new RuntimeException("[Like Click] Can't find Post"));

        Like newLike = dto.toEntity(user, post);
        Like savedLike = likeInterface.save(newLike);

        return LikeResponseDto.from(savedLike);
    }

    public List<Like> likeCount() {
        Map<Integer, Integer> likeCount = new HashMap<>();

        List<Like> likes = likeInterface.findAll();

        return likes;
    }
}