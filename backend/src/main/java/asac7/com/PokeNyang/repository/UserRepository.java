package asac7.com.PokeNyang.repository;

import asac7.com.PokeNyang.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository extends JpaRepository<User, Integer> {
}
