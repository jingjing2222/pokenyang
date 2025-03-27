package asac7.com.PokeNyang.repository;

import asac7.com.PokeNyang.entity.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRepository {

    @PersistenceContext
    private EntityManager em;

    public User loginUser(String email, String password) {
        try {
            User userLogin = em.createQuery("SELECT u FROM User u WHERE u.email = :email AND u.password = :password", User.class)
                    .setParameter("email", email)
                    .setParameter("password", password)
                    .getSingleResult();
            return userLogin;

        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }

    public List<Long> findPostIdsByUserId(Long userId) {
        String jpql = "SELECT c.id FROM Post c WHERE c.user.id = :userId";
        return em.createQuery(jpql, Long.class)
                .setParameter("userId", userId)
                .getResultList();
    }
}