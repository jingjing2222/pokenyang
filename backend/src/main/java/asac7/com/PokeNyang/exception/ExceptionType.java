package asac7.com.PokeNyang.exception;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.slf4j.event.Level;
import org.springframework.http.HttpStatus;

@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
@Getter
@RequiredArgsConstructor
public enum ExceptionType {

    USER_NOT_FOUND(HttpStatus.NOT_FOUND, Level.WARN);

    HttpStatus status;
    Level level;
}
