package asac7.com.PokeNyang.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.time.LocalDate;
import java.util.List;

import lombok.*;

@Entity
@Table(name = "post_table")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Post {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "post_id")
	private Long id;

	private String title;
	private String content;
	private Double lng;
	private Double lat;
	@Column(name = "create_at")
	private LocalDate createdAt;

	@ManyToOne
	@JoinColumn(name = "place_id", nullable = true)
	@JsonIgnore // 순환 참조 방지
	private Place place;

	@ManyToOne
	@JoinColumn(name = "user_id", nullable = true)
	@JsonIgnore // 순환 참조 방지
	private User user;

	@OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
	@JsonIgnore // 순환 참조 방지
	private List<Comment> comments;
	@JsonIgnore
	@OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
	private List<Image> images;
	@JsonIgnore
	@OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
	private List<Like> likes;
}
