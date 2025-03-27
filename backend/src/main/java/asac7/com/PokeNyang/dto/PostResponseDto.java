package asac7.com.PokeNyang.dto;

import asac7.com.PokeNyang.entity.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PostResponseDto {
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