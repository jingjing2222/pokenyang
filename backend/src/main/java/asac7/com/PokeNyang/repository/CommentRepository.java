package asac7.com.PokeNyang.repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CommentRepository {

    @PersistenceContext
    private EntityManager em;

    public List<Long> findCommentIdsByUserId(Long userId) {
        String jpql = "SELECT c.id FROM Comment c WHERE c.user.id = :userId";
        return em.createQuery(jpql, Long.class)
                .setParameter("userId", userId)
                .getResultList();
    }
}
