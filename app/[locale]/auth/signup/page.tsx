"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader as Loader2, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

export default function SignupPage() {
  const t = useTranslations('auth.signup');
  const locale = useLocale();
  const router = useRouter();
  
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      setSuccess(true);
      setTimeout(() => {
        router.push(`/${locale}/auth/login`);
      }, 2000);
    } catch (error: any) {
      setError(error.message || 'An error occurred. Please try again.');
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

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cream via-hot-pink/20 to-bright-yellow/30 dark:from-cream-dark dark:via-hot-pink-dark/20 dark:to-bright-yellow-dark/30 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-0 shadow-2xl bg-background/95 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-hot-pink to-bright-yellow rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🎉</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Welcome to The Good News!
            </h2>
            <p className="text-muted-foreground mb-4">
              Your account has been created successfully. Redirecting to login...
            </p>
            <div className="animate-pulse">
              <Loader2 className="h-6 w-6 animate-spin mx-auto text-hot-pink" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-hot-pink/20 to-bright-yellow/30 dark:from-cream-dark dark:via-hot-pink-dark/20 dark:to-bright-yellow-dark/30 flex items-center justify-center p-4">
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

              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  {t('name')}
                </Label>
                <div className="relative">
                  <User className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="pl-10 rtl:pl-4 rtl:pr-10 h-12 bg-muted/50 border-border/50 focus:border-hot-pink/50 focus:ring-hot-pink/25"
                    required
                  />
                </div>
              </div>

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

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium">
                  {t('confirmPassword')}
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="pl-10 rtl:pl-4 rtl:pr-12 h-12 bg-muted/50 border-border/50 focus:border-hot-pink/50 focus:ring-hot-pink/25"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
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
                    Creating account...
                  </>
                ) : (
                  t('button')
                )}
              </Button>
            </form>

            {/* Login Link */}
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                {t('hasAccount')}{' '}
                <Link
                  href={`/${locale}/auth/login`}
                  className="font-medium text-hot-pink hover:text-hot-pink/80 transition-colors"
                >
                  {t('signIn')}
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}