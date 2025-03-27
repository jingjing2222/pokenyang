package asac7.com.PokeNyang.repository;

import asac7.com.PokeNyang.entity.Like;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LikeInterface extends JpaRepository<Like, Integer> {

    Like save(Like entity);

    List<Like> findAll();
}