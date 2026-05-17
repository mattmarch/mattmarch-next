# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build (also type-checks)
npm run lint     # ESLint
```

There are no automated tests. Verify changes by running the dev server.

## Architecture

This is Matt March's personal website/blog built with Next.js 16 (App Router), TypeScript, and Tailwind CSS. It is deployed on Vercel.

**Routing:**
- `/` — homepage (`app/page.tsx`): intro, projects list, and blog post index
- `/posts/[id]` — individual blog post (`app/posts/[id]/page.tsx`): statically generated at build time

**Blog posts** are Markdown files in `/posts/`. Each file requires `title` and `date` (YYYY-MM-DD) frontmatter fields. `lib/posts.ts` reads and parses these files using `gray-matter` and converts Markdown to HTML with `remark`/`remark-html`. The post `id` is the filename without the `.md` extension.

**Styling** uses Tailwind with the `@tailwindcss/typography` plugin (`prose` classes) for rendering blog post content.

**Layout** (`app/layout.tsx`) wraps all pages with a hero header (featuring `bridge.jpg`) and footer, and includes Vercel Analytics.
