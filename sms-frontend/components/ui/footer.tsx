"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-0 justify-center flex">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2025 SMS. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
            Terms
          </Link>
          <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
