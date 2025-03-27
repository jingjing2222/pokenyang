import { useNavigate } from '@tanstack/react-router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoaderCircle } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '@/api/api';

interface LoginFormData {
  userId: string;
  password: string;
  rememberMe: boolean;
}

const spinStyle = {
  animation: 'spin 1s linear infinite'
};

const LoginForm: React.FC = () => {
  const [loginError, setLoginError] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    defaultValues: {
      userId: '',
      password: '',
      rememberMe: false
    }
  });

  const loginMutation = useMutation({
    mutationFn: (data: { email: string; password: number }) =>
      loginUser(data.email, data.password),
    onSuccess: () => {
      localStorage.setItem('user', JSON.stringify({
        userId: formData.userId,
        isLoggedIn: true,
        loginTime: new Date().toISOString()
      }));

      if (formData.rememberMe) {
        localStorage.setItem('rememberedUserId', formData.userId);
      } else {
        localStorage.removeItem('rememberedUserId');
      }

      navigate({ to: '/home' });
    },
    onError: (error) => {
      console.error('Login error:', error);
      setLoginError('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.');
    }
  });

  let formData: LoginFormData;

  const onSubmit = (data: LoginFormData) => {
    formData = data;
    setLoginError(null);

    const numericPassword = Number(data.password);

    if (isNaN(numericPassword)) {
      setLoginError('비밀번호는 숫자만 입력 가능합니다.');
      return;
    }

    loginMutation.mutate({
      email: data.userId,
      password: numericPassword
    });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-start min-h-screen px-2">
        <div className='text-center text-[#F291D0] font-semibold text-5xl pt-40 pb-12'>
          PokeNyang
        </div>
        <div className="w-full max-w-md p-6 bg-white rounded-lg border-1 border-[#D9D9D9]">
          {loginError && (
            <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
              {loginError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 flex flex-col items-center">
            <img className='mx-auto' src='/images/loginlogo.svg' sizes='130' alt="login" />
            <div className='w-[300px] h-[60px]'>
              <input
                id="userId"
                type="text"
                placeholder='이메일'
                className={`shadow-md px-2 w-full h-full border rounded-md ${errors.userId ? 'border-red-500' : 'border-gray-300'}`}
                {...register('userId', {
                  required: '이메일을 입력해주세요',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: '유효한 이메일 주소를 입력해주세요'
                  }
                })}
              />
              {errors.userId && (
                <p className="mt-1 text-xs text-red-500">{errors.userId.message}</p>
              )}
            </div>

            <div className='w-[300px] h-[60px]'>
              <input
                id="password"
                type="password"
                placeholder='비밀번호'
                className={`shadow-md px-2 w-full h-full border rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                {...register('password', {
                  required: '비밀번호를 입력해주세요',
                  minLength: {
                    value: 6,
                    message: '비밀번호는 최소 6자 이상이어야 합니다'
                  }
                })}
              />
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
              )}
            </div>

            <div className="flex items-center w-[300px]">
              <input
                id="rememberMe"
                type="checkbox"
                className="h-4 w-4 text-[#F2B3D1] focus:ring-[#F2B3D1] border-gray-300 rounded"
                {...register('rememberMe')}
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                로그인 상태 유지
              </label>
            </div>

            <button
              type="submit"
              className="px-4 py-2 text-white text-3xl font-semibold bg-[#F2B3D1] focus:outline-none w-[260px] h-[60px] rounded-4xl"
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? (
                <span className="flex items-center justify-center">
                  <LoaderCircle style={spinStyle} />
                </span>
              ) : (
                'LOGIN'
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;