package asac7.com.PokeNyang.service;

import asac7.com.PokeNyang.dto.CommentRequestDto;
import asac7.com.PokeNyang.dto.CommentResponseDto;
import asac7.com.PokeNyang.entity.Comment;
import asac7.com.PokeNyang.entity.Post;
import asac7.com.PokeNyang.entity.User;
import asac7.com.PokeNyang.repository.CommentInterface;
import asac7.com.PokeNyang.repository.PostInterface;
import asac7.com.PokeNyang.repository.UserInterface;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
public class CommentService {

    CommentInterface commentInterface;
    PostInterface postInterface;
    UserInterface userInterface;

    public CommentResponseDto insert(CommentRequestDto dto) {

        User user = userInterface.findById(dto.getUserId())
                .orElseThrow(() -> new RuntimeException("No User"));

        Post post = postInterface.findById(dto.getPostId())
                .orElseThrow(() -> new RuntimeException("No Post"));

        Comment newComment = dto.toEntity(user, post);
        Comment savedComment = commentInterface.save(newComment);

        return CommentResponseDto.from(savedComment);
    }

    public CommentResponseDto findById(Integer id) {
        Comment findComment = commentInterface.findById(id)
                .orElseThrow(() -> new RuntimeException("No Comment"));
        return CommentResponseDto.from(findComment);
    }

    public CommentResponseDto updateComment(CommentRequestDto entity, Integer id) {
        Comment existingComment = commentInterface.findById(id)
                .orElseThrow(() -> new RuntimeException("No Comment"));

        Comment updateComment = existingComment.updateComment(
                entity.getComment()
        );

        return CommentResponseDto.from(commentInterface.save(updateComment));
    }


    public void removeComment(Integer id) {
        commentInterface.deleteById(id);
    }
}

