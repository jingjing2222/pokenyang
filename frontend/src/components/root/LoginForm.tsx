import { useNavigate } from '@tanstack/react-router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoaderCircle } from 'lucide-react';

interface LoginFormData {
  userId: string;
  password: string;
  rememberMe: boolean;
}
const spinStyle = {
  animation: 'spin 1s linear infinite'
};

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
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

  const onSubmit = (data: LoginFormData) => {
    setIsLoading(true);
    setLoginError(null);

    setTimeout(() => {
      try {
        localStorage.setItem('user', JSON.stringify({
          userId: data.userId,
          isLoggedIn: true,
          loginTime: new Date().toISOString()
        }));

        if (data.rememberMe) {
          localStorage.setItem('rememberedUserId', data.userId);
        } else {
          localStorage.removeItem('rememberedUserId');
        }

        setIsLoading(false);
        navigate({ to: '/home' });
      } catch (error) {
        setLoginError('로그인 정보 저장 중 오류가 발생했습니다.');
        setIsLoading(false);
      }
    }, 1000);
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
            <img className='mx-auto' src='/images/loginlogo.svg' sizes='130' />
            <div className='w-[300px] h-[60px]'>
              <input
                id="userId"
                type="text"
                placeholder='이메일'
                className={`shadow-md px-2 w-full h-full border rounded-md ${errors.userId ? 'border-red-500' : 'border-gray-300'}`}
                {...register('userId', {
                  required: '아이디를 입력해주세요',
                  minLength: {
                    value: 4,
                    message: '아이디는 최소 4자 이상이어야 합니다'
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

            <button
              type="submit"
              className="px-4 py-2 text-white text-3xl font-semibold bg-[#F2B3D1] focus:outline-none w-[260px] h-[60px] rounded-4xl"
              disabled={isLoading}
            >
              {isLoading ? (
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