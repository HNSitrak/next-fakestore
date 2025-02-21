'use client';

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

interface SearchInputProps {
  onSearch: (value: string) => void;
  placeholder?: string;
}
const SearchInput = ({ onSearch, placeholder = 'Rechercher par titre...' }:SearchInputProps) => {
  const [value, setValue] = React.useState('');

  const handleSubmit = () => {
    onSearch(value);
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit();
    }} className="space-y-2">
      <div className="relative">
        <Input className="pe-4 ps-9 w-full min-w-[320px]"
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)} />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <Search size={16} strokeWidth={2} />
        </div>
      </div>
    </form>
  )
}

export default SearchInput;
