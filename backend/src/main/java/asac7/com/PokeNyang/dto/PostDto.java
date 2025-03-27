package asac7.com.PokeNyang.dto;

import asac7.com.PokeNyang.entity.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PostDto {
    private Long id;
    private String title;
    private String content;
    private LocalDate createdAt;
    private Place place;
    private User user;
    private List<Comment> comments;
    private List<Image> images;
    private List<Like> likes;
}
