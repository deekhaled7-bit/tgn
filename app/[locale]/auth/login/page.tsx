"use client";

import React, { useState } from 'react';
import { signIn, getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader as Loader2, Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const t = useTranslations('auth.login');
  const locale = useLocale();
  const router = useRouter();
  
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false
      });

      if (result?.error) {
        setError('Invalid email or password');
      } else {
        const session = await getSession();
        router.push(`/${locale}/dashboard`);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-hot-pink/20 to-bright-yellow/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center justify-center space-x-2 rtl:space-x-reverse mb-8"
        >
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-hot-pink to-bright-yellow animate-pulse-slow" />
          <span className="text-2xl font-bold text-foreground">
            The Good News
          </span>
        </Link>

        <Card className="border-0 shadow-2xl bg-background/95 backdrop-blur-sm">
          <CardHeader className="space-y-2 pb-8">
            <h1 className="text-3xl font-bold text-center text-foreground">
              {t('title')}
            </h1>
            <p className="text-center text-muted-foreground">
              {t('subtitle')}
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  {t('email')}
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="enter@email.com"
                    className="pl-10 rtl:pl-4 rtl:pr-10 h-12 bg-muted/50 border-border/50 focus:border-hot-pink/50 focus:ring-hot-pink/25"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  {t('password')}
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="pl-10 rtl:pl-4 rtl:pr-12 h-12 bg-muted/50 border-border/50 focus:border-hot-pink/50 focus:ring-hot-pink/25"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 button-glow bg-gradient-to-r from-hot-pink to-bright-yellow hover:shadow-xl text-black font-semibold"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 rtl:mr-0 rtl:ml-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  t('button')
                )}
              </Button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                {t('noAccount')}{' '}
                <Link
                  href={`/${locale}/auth/signup`}
                  className="font-medium text-hot-pink hover:text-hot-pink/80 transition-colors"
                >
                  {t('signUp')}
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}