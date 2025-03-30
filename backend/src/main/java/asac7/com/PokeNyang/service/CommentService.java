package asac7.com.PokeNyang.service;

import asac7.com.PokeNyang.dto.CommentRequestDto;
import asac7.com.PokeNyang.dto.CommentResponseDto;
import asac7.com.PokeNyang.dto.PostCommentResponseDto;
import asac7.com.PokeNyang.entity.Comment;
import asac7.com.PokeNyang.entity.Post;
import asac7.com.PokeNyang.entity.User;
import asac7.com.PokeNyang.exception.CustomException;
import asac7.com.PokeNyang.exception.ExceptionType;
import asac7.com.PokeNyang.repository.CommentInterface;
import asac7.com.PokeNyang.repository.PostInterface;
import asac7.com.PokeNyang.repository.UserInterface;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
public class CommentService {

    CommentInterface commentInterface;
    PostInterface postInterface;
    UserInterface userInterface;

    public CommentResponseDto insert(CommentRequestDto dto) {

        User user = userInterface.findById(dto.getUserId())
                .orElseThrow(() -> new CustomException(ExceptionType.USER_NOT_FOUND, "Comment Insert User Id"));

        Post post = postInterface.findById(dto.getPostId())
                .orElseThrow(() -> new CustomException(ExceptionType.USER_NOT_FOUND, "Comment Insert Post Id"));

        Comment newComment = dto.toEntity(user, post);
        Comment savedComment = commentInterface.save(newComment);

        return CommentResponseDto.from(savedComment);
    }

    public CommentResponseDto findById(Integer id) {
        Comment findComment = commentInterface.findById(id)
                .orElseThrow(() -> new CustomException(ExceptionType.USER_NOT_FOUND, "Comment FindById UserId"));
        return CommentResponseDto.from(findComment);
    }

    public CommentResponseDto updateComment(CommentRequestDto entity, Integer id) {
        Comment existingComment = commentInterface.findById(id)
                .orElseThrow(() -> new CustomException(ExceptionType.USER_NOT_FOUND, "Comment Update UserId"));

        Comment updateComment = existingComment.updateComment(
                entity.getComment()
        );
        return CommentResponseDto.from(commentInterface.save(updateComment));
    }

    public void removeComment(Integer id) {
        commentInterface.deleteById(id);
    }

    public List<PostCommentResponseDto> findByUserId(Long id) {
        List<Comment> comments = commentInterface.findByUserId(id);

        return comments.stream()
                .map(PostCommentResponseDto::new)
                .toList();
    }
}

