package asac7.com.PokeNyang.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserBuilderDto {
    private Long id;
    private String password;
    private String name;
    private String email;
}
