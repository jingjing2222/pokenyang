package asac7.com.PokeNyang.repository;

import asac7.com.PokeNyang.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.Option;
import java.util.Optional;

public interface UserInterface extends JpaRepository<User, Integer> {
    Optional<User> findById(Integer id);
}