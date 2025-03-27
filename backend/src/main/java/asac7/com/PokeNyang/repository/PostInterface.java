package asac7.com.PokeNyang.repository;

import asac7.com.PokeNyang.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PostInterface extends JpaRepository<Post, Integer> {
    Optional<Post> findById(Integer id);
}