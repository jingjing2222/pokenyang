package asac7.com.PokeNyang.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "image_table")
@Getter
@Setter
@AllArgsConstructor
public class Image {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "image_id")
	private long id;
	@JsonIgnore
	@JoinColumn(name = "post_id")
	@ManyToOne
	@JsonBackReference //순환참조 방지
	private Post post;

	private String imageUrl;

	public Image() {}

	public Image(Post post, String imageUrl) {
		this.post = post;
		this.imageUrl = imageUrl;
	}
}