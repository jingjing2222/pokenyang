package asac7.com.PokeNyang.repository;

import asac7.com.PokeNyang.entity.Post;
import asac7.com.PokeNyang.entity.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
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
            return em.createQuery("SELECT u FROM User u WHERE u.email = :email AND u.password = :password", User.class)
                    .setParameter("email", email)
                    .setParameter("password", password)
                    .getSingleResult();
        } catch (NoResultException e) {
            return null;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public List<Post> findPostsByUserId(Long userId) {
        String jpql = "SELECT p FROM Post p WHERE p.user.id = :userId";
        return em.createQuery(jpql, Post.class)
                .setParameter("userId", userId)
                .getResultList();
    }
}