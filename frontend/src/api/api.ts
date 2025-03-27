export interface LoginRequestBody {
  email: string;
  password: number;
}

export interface LoginResponse {
  false: boolean;
  id: number;
}

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await fetch('http://localhost:8080/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: LoginResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export interface GetCommentsResponse{
  post_id:number[]
}

export const getComments = async (userId:number): Promise<GetCommentsResponse> => {
  try {
    const response = await fetch(`http://localhost:8080/comment/user/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: GetCommentsResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export interface CommentResponse {
  comment: {
    id: number;
    comment: string;
    created_at: string;
  };
  post: {
    id: number;
    title: string;
  };
}

export const fetchUserComment = async (userId: number) => {
  try {
    const response = await fetch(`http://localhost:8080/comment/user/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }


    const data: CommentResponse[] = await response.json();
    return data;
  } catch (error) {
    console.error('댓글 정보를 가져오는 중 오류가 발생했습니다:', error);
    throw error;
  }
};

export interface Image {
  id: number;
  url?: string;
}

export interface Like {
  id: number;
  userId?: number;
}

export interface Comment {
  id: number;
  comment: string;
  createdAt: string;
}

export interface UserBasic {
  id: number;
  password: string;
  name: string;
  email: string;
}

export interface PostBasic {
  id: number;
  title: string;
  content: string;
  lng: number | null;
  lat: number | null;
  createdAt: string;
  images: Image[];
  likes: Like[];
}

export interface User extends UserBasic {
  posts: PostBasic[];
  likes: Like[];
}

export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  place: string | null;
  lng: number | null;
  lat: number | null;
  user: User | null;
  comments: Comment[];
  images: Image[];
  likes: Like[];
}
export type PostsResponse = Post[];

export const fetchUserPosts = async () => {
  try {
    const response = await fetch(`http://localhost:8080/posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }


    const data: PostsResponse = await response.json();
    console.table(data)
    return data;
  } catch (error) {
    console.error('댓글 정보를 가져오는 중 오류가 발생했습니다:', error);
    throw error;
  }
};

export const fetchUserPost = async (postId:number) => {
  try {
    const response = await fetch(`http://localhost:8080/posts/${postId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }


    const data: Post = await response.json();
    return data;
  } catch (error) {
    console.error('댓글 정보를 가져오는 중 오류가 발생했습니다:', error);
    throw error;
  }
};

export interface PostUserPostProps {
  title: string
  content: string
  lat: number
  lng: number
}

export const PostUserPost = async ({title, content, lat, lng}: PostUserPostProps) => {
  try {
    const response = await fetch(`http://localhost:8080/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
        lat,
        lng
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error posting user data:', error);
    throw error;
  }
};