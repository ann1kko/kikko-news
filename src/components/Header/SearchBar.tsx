'use client';

import { Button, Input } from '@/ui';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

export const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');

    function handleInput({ target: { value } }: ChangeEvent<HTMLInputElement>) {
        setInputValue(value);
    }

    return (
        <label className="flex w-4/5 gap-2 justify-center rounded-md bg-[#f5f5f5] p-2 sm:w-[262px]">
            <Image src="/search.svg" alt="search icon" width={25} height={25} />
            <Input
                className="relative"
                placeholder="Search"
                value={inputValue}
                onChange={(e) => handleInput(e)}
            />

            <Button
                className="bg-transparent"
                onClick={() => setInputValue('')}>
                <span className="relative block h-0.5 w-4 rotate-45 bg-black after:absolute after:top-0 after:right-0 after:h-0.5 after:w-4 after:-rotate-90 after:bg-black" />
            </Button>
        </label>
    );
};
