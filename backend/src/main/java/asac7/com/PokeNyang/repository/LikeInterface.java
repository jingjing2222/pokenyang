package asac7.com.PokeNyang.repository;

import asac7.com.PokeNyang.entity.Like;
import asac7.com.PokeNyang.entity.Post;
import asac7.com.PokeNyang.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface LikeInterface extends JpaRepository<Like, Integer> {
    Like save(Like entity);

    Optional<Like> findByUserAndPost(User user, Post post);

    int countByPost(Post post);
}