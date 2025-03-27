package asac7.com.PokeNyang.controller;

import asac7.com.PokeNyang.dto.CommentRequestDto;
import asac7.com.PokeNyang.dto.CommentResponseDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;

@Tag(name = "Comment API", description = "댓글 관련 API")
public interface CommentControllerDocs {

    @Operation(summary = "댓글 생성", description = "새로운 댓글 작성 시 댓글 생성")
    ResponseEntity<CommentResponseDto> create(
            @Parameter(description = "댓글 생성 요청 데이터", required = true)
            CommentRequestDto dto);

    @Operation(summary = "댓글 조회", description = "댓글 ID를 통해 특정 댓글 조회")
    ResponseEntity<CommentResponseDto> readComment(
            @Parameter(description = "조회할 댓글 ID", example = "1", required = true)
            Integer id);

    @Operation(summary = "댓글 수정", description = "댓글 ID를 통해 특정 댓글 내용 수정")
    ResponseEntity<CommentResponseDto> updateComment(
            @Parameter(description = "수정할 댓글 데이터", required = true)
            CommentRequestDto dto,
            @Parameter(description = "수정할 댓글 ID", example = "1", required = true)
            Integer id);

    @Operation(summary = "댓글 삭제", description = "댓글 ID를 통해 특정 댓글 삭제")
    ResponseEntity<Void> deleteComment(
            @Parameter(description = "삭제할 댓글 ID", example = "1", required = true)
            Integer id);
}