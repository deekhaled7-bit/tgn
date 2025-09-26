"use client";

import React, { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { 
  Search, 
  Filter, 
  X, 
  Check,
  Tag as TagIcon
} from 'lucide-react';
import { ARTICLE_CATEGORIES } from '@/lib/constants';

export function ArticleFilters() {
  const t = useTranslations('articles');
  const locale = useLocale();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isTagsOpen, setIsTagsOpen] = useState(false);

  const categories = ARTICLE_CATEGORIES[locale as keyof typeof ARTICLE_CATEGORIES] || ARTICLE_CATEGORIES.en;
  
  // Sample tags (in a real app, these would come from an API)
  const availableTags = [
    'Technology', 'Health', 'Environment', 'Community', 'Innovation',
    'Sustainability', 'Education', 'Wellness', 'Science', 'Culture'
  ];

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedTags([]);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const hasActiveFilters = searchTerm || selectedCategory || selectedTags.length > 0;

  return (
    <div className="bg-muted/20 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-border/50">
      <div className="space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 rtl:left-auto rtl:right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="search"
            placeholder={t('searchPlaceholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 rtl:pl-4 rtl:pr-12 h-12 bg-background border-border/50 focus:border-hot-pink/50 focus:ring-hot-pink/25"
          />
        </div>

        {/* Filters Row */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Category Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-foreground mb-2">
              {t('categories')}
            </label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-background border-border/50 focus:border-hot-pink/50">
                <SelectValue placeholder={t('allCategories')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">{t('allCategories')}</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.slug}>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                      <span>{category.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Tags Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-foreground mb-2">
              Tags
            </label>
            <Popover open={isTagsOpen} onOpenChange={setIsTagsOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={isTagsOpen}
                  className="w-full justify-between bg-background border-border/50 focus:border-hot-pink/50"
                >
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <TagIcon className="w-4 h-4 text-muted-foreground" />
                    <span>
                      {selectedTags.length === 0
                        ? "Select tags..."
                        : `${selectedTags.length} selected`}
                    </span>
                  </div>
                  <Filter className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0" align="start">
                <Command>
                  <CommandInput placeholder="Search tags..." />
                  <CommandList>
                    <CommandEmpty>No tags found.</CommandEmpty>
                    <CommandGroup>
                      {availableTags.map((tag) => (
                        <CommandItem
                          key={tag}
                          onSelect={() => toggleTag(tag)}
                        >
                          <Check
                            className={`mr-2 rtl:mr-0 rtl:ml-2 h-4 w-4 ${
                              selectedTags.includes(tag) ? "opacity-100" : "opacity-0"
                            }`}
                          />
                          {tag}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <div className="flex items-end">
              <Button
                variant="outline"
                onClick={clearFilters}
                className="flex items-center space-x-2 rtl:space-x-reverse hover:bg-red-50 hover:border-red-200 hover:text-red-600 dark:hover:bg-red-950 dark:hover:border-red-800 dark:hover:text-red-400"
              >
                <X className="w-4 h-4" />
                <span>Clear</span>
              </Button>
            </div>
          )}
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2">
            {searchTerm && (
              <Badge
                variant="secondary"
                className="bg-hot-pink/10 text-hot-pink border-hot-pink/20"
              >
                Search: {searchTerm}
                <button
                  onClick={() => setSearchTerm('')}
                  className="ml-2 rtl:ml-0 rtl:mr-2 hover:text-hot-pink/80"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            )}
            {selectedCategory && (
              <Badge
                variant="secondary"
                className="bg-bright-yellow/10 text-bright-yellow-dark border-bright-yellow/20"
              >
                {categories.find(c => c.slug === selectedCategory)?.name}
                <button
                  onClick={() => setSelectedCategory('')}
                  className="ml-2 rtl:ml-0 rtl:mr-2 hover:text-bright-yellow-dark/80"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            )}
            {selectedTags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-cream/50 text-foreground border-cream/50"
              >
                {tag}
                <button
                  onClick={() => toggleTag(tag)}
                  className="ml-2 rtl:ml-0 rtl:mr-2 hover:text-foreground/80"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}