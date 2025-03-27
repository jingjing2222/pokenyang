package asac7.com.PokeNyang.exception;

import lombok.Getter;

@Getter
public class CustomException extends RuntimeException {
    ExceptionType type;

    public CustomException(ExceptionType type, String message) {
        super(message);
        this.type = type;
    }
}
