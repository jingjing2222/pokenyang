package asac7.com.PokeNyang.service;

import asac7.com.PokeNyang.dto.LikeRequestDto;
import asac7.com.PokeNyang.dto.LikeResponseDto;
import asac7.com.PokeNyang.entity.Like;
import asac7.com.PokeNyang.entity.Post;
import asac7.com.PokeNyang.entity.User;
import asac7.com.PokeNyang.exception.CustomException;
import asac7.com.PokeNyang.exception.ExceptionType;
import asac7.com.PokeNyang.repository.LikeInterface;
import asac7.com.PokeNyang.repository.PostInterface;
import asac7.com.PokeNyang.repository.UserInterface;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
@Service
public class LikeService {

    LikeInterface likeInterface;
    PostInterface postInterface;
    UserInterface userInterface;

    @Transactional
    public boolean toggleLike(LikeRequestDto dto) {

        User user = userInterface.findById(dto.getUserId())
                .orElseThrow(() -> new CustomException(ExceptionType.USER_NOT_FOUND, "[save Like] Can't find User"));

        Post post = postInterface.findById(dto.getPostId())
                .orElseThrow(() -> new CustomException(ExceptionType.USER_NOT_FOUND, "[save Like] Can't find Post"));

        Optional<Like> existingLike = likeInterface.findByUserAndPost(user, post);

        if (existingLike.isPresent()) {
            likeInterface.delete(existingLike.get());
            return false;
        } else {
            LikeRequestDto newLike = new LikeRequestDto();
            likeInterface.save(newLike.toEntity(user, post));
            return true;
        }
    }

    public int getLikeCount(Integer postId) {
        Post post = postInterface.findById(postId)
                .orElseThrow(() -> new CustomException(ExceptionType.USER_NOT_FOUND, "[save Like] Can't find Post"));
        return likeInterface.countByPost(post);
    }
}