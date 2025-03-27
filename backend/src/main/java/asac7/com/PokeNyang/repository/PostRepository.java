package asac7.com.PokeNyang.repository;

import asac7.com.PokeNyang.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
