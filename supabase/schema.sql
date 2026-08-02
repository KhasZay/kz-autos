-- KZ Autos admin panel schema.
-- Paste this whole file into the Supabase SQL Editor (SQL Editor -> New query) and run it once.

-- ============================================================
-- EXTENSIONS
-- ============================================================
create extension if not exists "pgcrypto"; -- for gen_random_uuid()

-- ============================================================
-- updated_at TRIGGER HELPER
-- ============================================================
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- ============================================================
-- VEHICLES
-- ============================================================
create table if not exists public.vehicles (
  id          uuid primary key default gen_random_uuid(),
  category    text not null check (category in ('nigerian-used', 'foreign-used', 'brand-new')),
  make        text not null,
  model       text not null,
  year        integer not null,
  price       text not null,
  mileage     text not null,
  color       text,
  image_url   text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

drop trigger if exists vehicles_set_updated_at on public.vehicles;
create trigger vehicles_set_updated_at
  before update on public.vehicles
  for each row execute function set_updated_at();

alter table public.vehicles enable row level security;

drop policy if exists "vehicles are publicly readable" on public.vehicles;
create policy "vehicles are publicly readable"
  on public.vehicles for select
  to anon, authenticated
  using (true);

drop policy if exists "authenticated users can insert vehicles" on public.vehicles;
create policy "authenticated users can insert vehicles"
  on public.vehicles for insert
  to authenticated
  with check (true);

drop policy if exists "authenticated users can update vehicles" on public.vehicles;
create policy "authenticated users can update vehicles"
  on public.vehicles for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "authenticated users can delete vehicles" on public.vehicles;
create policy "authenticated users can delete vehicles"
  on public.vehicles for delete
  to authenticated
  using (true);

-- ============================================================
-- BLOG POSTS
-- ============================================================
create table if not exists public.blog_posts (
  id              uuid primary key default gen_random_uuid(),
  slug            text not null unique,
  title           text not null,
  excerpt         text,
  body            text not null,
  cover_image_url text,
  published       boolean not null default true,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

drop trigger if exists blog_posts_set_updated_at on public.blog_posts;
create trigger blog_posts_set_updated_at
  before update on public.blog_posts
  for each row execute function set_updated_at();

alter table public.blog_posts enable row level security;

drop policy if exists "published posts are publicly readable" on public.blog_posts;
create policy "published posts are publicly readable"
  on public.blog_posts for select
  to anon
  using (published = true);

drop policy if exists "authenticated users can read all posts" on public.blog_posts;
create policy "authenticated users can read all posts"
  on public.blog_posts for select
  to authenticated
  using (true);

drop policy if exists "authenticated users can insert posts" on public.blog_posts;
create policy "authenticated users can insert posts"
  on public.blog_posts for insert
  to authenticated
  with check (true);

drop policy if exists "authenticated users can update posts" on public.blog_posts;
create policy "authenticated users can update posts"
  on public.blog_posts for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "authenticated users can delete posts" on public.blog_posts;
create policy "authenticated users can delete posts"
  on public.blog_posts for delete
  to authenticated
  using (true);

-- ============================================================
-- STORAGE: public "media" bucket for vehicle + blog images
-- ============================================================
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

drop policy if exists "media is publicly readable" on storage.objects;
create policy "media is publicly readable"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'media');

drop policy if exists "authenticated users can upload media" on storage.objects;
create policy "authenticated users can upload media"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'media');

drop policy if exists "authenticated users can update media" on storage.objects;
create policy "authenticated users can update media"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'media')
  with check (bucket_id = 'media');

drop policy if exists "authenticated users can delete media" on storage.objects;
create policy "authenticated users can delete media"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'media');
