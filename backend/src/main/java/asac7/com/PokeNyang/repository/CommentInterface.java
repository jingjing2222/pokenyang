package asac7.com.PokeNyang.repository;

import asac7.com.PokeNyang.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentInterface extends JpaRepository<Comment, Integer> {
    Comment save(Comment entity);

    List<Comment> findByPostId(Long id);
}