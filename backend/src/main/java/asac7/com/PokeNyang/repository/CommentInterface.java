package asac7.com.PokeNyang.repository;

import asac7.com.PokeNyang.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentInterface extends JpaRepository<Comment, Integer> {
    Comment save(Comment entity);

}