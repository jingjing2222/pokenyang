package asac7.com.PokeNyang.service;


import asac7.com.PokeNyang.dto.PostDto;
import asac7.com.PokeNyang.dto.PostRequestDto;
import asac7.com.PokeNyang.dto.PostResponseDto;
import asac7.com.PokeNyang.entity.Post;
import asac7.com.PokeNyang.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PostService {

    @Autowired
    private PostRepository postRepository;

    @Transactional
    public PostDto createPost(PostDto requestDto) {
        Post post = Post.builder()
                .title(requestDto.getTitle())
                .content(requestDto.getContent())
                .createdAt(LocalDate.now())
                .xplace(requestDto.getXplace())
                .yplace(requestDto.getYplace())
                .build();

        Post savedPost = postRepository.save(post);

        return PostDto.builder()
                .id(savedPost.getId())
                .title(savedPost.getTitle())
                .content(savedPost.getContent())
                .createdAt(savedPost.getCreatedAt())
                .place(savedPost.getPlace())
                .xplace(savedPost.getXplace())
                .yplace(savedPost.getYplace())
                .user(savedPost.getUser())
                .comments(savedPost.getComments())
                .images(savedPost.getImages())
                .likes(savedPost.getLikes())
                .build();
    }


    @Transactional(readOnly = true)
    public List<PostDto> getAllPosts() {
        List<Post> posts = postRepository.findAll();
        return posts.stream()
                .map(post -> PostDto.builder()
                        .id(post.getId())
                        .title(post.getTitle())
                        .content(post.getContent())
                        .createdAt(post.getCreatedAt())
                        .place(post.getPlace())
                        .user(post.getUser())
                        .comments(post.getComments())
                        .images(post.getImages())
                        .likes(post.getLikes())
                        .build())
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public PostDto getPostById(Long id) {
        // 예외 처리: 사용자 정의 예외로 변경
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("포스트를 찾을 수 없습니다."));

        return PostDto.builder()
                .id(post.getId())
                .title(post.getTitle())
                .content(post.getContent())
                .createdAt(post.getCreatedAt())
                .place(post.getPlace())
                .user(post.getUser())
                .comments(post.getComments())
                .images(post.getImages())
                .likes(post.getLikes())
                .build();

    }



    @Transactional
    public PostResponseDto updatePost(Long id, PostRequestDto requestDto) {
        Post post = postRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Post not found"));
        post.setTitle(requestDto.getTitle());
        post.setContent(requestDto.getContent());

        Post updatedPost = postRepository.save(post);
        return new PostResponseDto(
                updatedPost.getId(),
                updatedPost.getTitle(),
                updatedPost.getContent(),
                updatedPost.getCreatedAt(),
                updatedPost.getPlace(),
                updatedPost.getUser(),
                updatedPost.getComments(),
                updatedPost.getImages(),
                updatedPost.getLikes()
        );
    }

    @Transactional
    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }
}