package asac7.com.PokeNyang.repository;

import asac7.com.PokeNyang.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User createUser(User entity);
    List<User> findAll();
    User findByEmail(String email);
    // 로그인
}