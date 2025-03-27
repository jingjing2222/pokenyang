package asac7.com.PokeNyang.repository;

import asac7.com.PokeNyang.entity.Comment;
import java.util.List;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;


@Repository
public class CommentRepository {

    @PersistenceContext
    private EntityManager em;

    public List<Comment> findCommentIdsByUserId(Long userId) {
        String jpql = "SELECT c FROM Comment c WHERE c.user.id = :userId";

        return em.createQuery(jpql, Comment.class)
                .setParameter("userId", userId)
                .getResultList();
    }
}
