package asac7.com.PokeNyang.exception;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;

@Slf4j
@RestControllerAdvice
public class CommonExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<ErrorDetail> handler(HttpServletRequest request, CustomException e) {
        ExceptionType type = e.getType();
        HttpStatus status = type.getStatus();

        ErrorDetail detail = ErrorDetail.builder()
                .error(e.getMessage())
                .path(request.getRequestURI())
                .status(status.value())
                .timestamp(LocalDateTime.now())
                .build();

        return ResponseEntity.status(status).body(detail);
    }

    @ExceptionHandler
    public ResponseEntity<ErrorDetail> handler(HttpServletRequest request, Exception e) {
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        ErrorDetail detail = ErrorDetail.builder()
                .error(e.getMessage())
                .path(request.getRequestURI())
                .status(status.value())
                .timestamp(LocalDateTime.now())
                .build();

        return ResponseEntity.status(status).body(detail);
    }


}
