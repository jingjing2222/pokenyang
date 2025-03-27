package asac7.com.PokeNyang.repository;

import asac7.com.PokeNyang.dto.CommentResponseDto;
import asac7.com.PokeNyang.entity.Comment;
import asac7.com.PokeNyang.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByPostId(Long postId);
}
