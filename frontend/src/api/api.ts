// api.ts

interface LoginRequestBody {
  email: string;
  password: number;
}

interface LoginResponse {
  success: boolean;
  token?: string;
  userId?: number;
  message?: string;
}

/**
 * 사용자 로그인 API 호출 함수
 * @param email 이메일 주소
 * @param password 비밀번호(숫자)
 * @returns Promise<LoginResponse> 로그인 결과
 */
export const loginUser = async (email: string, password: number): Promise<LoginResponse> => {
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