package asac7.com.PokeNyang.repository;

import asac7.com.PokeNyang.entity.Image;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;

@Repository
public class ImageRepository {

    @PersistenceContext
    private EntityManager em;

    public void save(Image image) {
        em.persist(image);
    }

    public void deleteAllByPostId(long postId) {
        em.createQuery("delete from Image i where i.post.id = :postId")
                .setParameter("postId", postId).executeUpdate();
    }
    public void deleteAllByUserId(long userId) {
        em.createQuery("delete from Image i where i.post.user.id = :userId")
                .setParameter("userId", userId)
                .executeUpdate();
    }
}