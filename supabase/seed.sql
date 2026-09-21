-- 교재 테이블과 더미 데이터 (여러 번 실행해도 결과가 같습니다)
create table if not exists public.coursebooks (
  id bigint generated always as identity primary key,
  type text not null check (type in ('single', 'pass')),
  title text not null,
  price integer not null,
  discount_rate integer not null default 0,
  sale_price integer not null,
  image_url text not null,
  created_at timestamptz not null default now()
);

alter table public.coursebooks enable row level security;

drop policy if exists "누구나 읽기" on public.coursebooks;
create policy "누구나 읽기" on public.coursebooks for select using (true);

truncate public.coursebooks restart identity;

insert into public.coursebooks (type, title, price, discount_rate, sale_price, image_url) values
  ('single', '2026 Hidden Kice 시즌7', 40000, 0, 40000, '/images/coursebook/single.png'),
  ('pass', '2026 Hidden Kice 시즌7', 76000, 5, 64800, '/images/coursebook/pass.png'),
  ('pass', '2026 Hidden Kice 시즌7', 76000, 5, 64800, '/images/coursebook/pass.png'),
  ('pass', '2026 Hidden Kice 시즌7', 76000, 5, 64800, '/images/coursebook/single.png'),
  ('pass', '2026 Hidden Kice 시즌7', 76000, 5, 64800, '/images/coursebook/single.png'),
  ('pass', '2026 Hidden Kice 시즌7', 76000, 5, 64800, '/images/coursebook/pass.png'),
  ('single', '2026 Hidden Kice 시즌7', 40000, 0, 40000, '/images/coursebook/single.png'),
  ('pass', '2026 Hidden Kice 시즌7', 76000, 5, 64800, '/images/coursebook/pass.png'),
  ('single', '2026 Hidden Kice 시즌7', 40000, 0, 40000, '/images/coursebook/single.png'),
  ('pass', '2026 Hidden Kice 시즌7', 76000, 5, 64800, '/images/coursebook/pass.png'),
  ('pass', '2026 Hidden Kice 시즌7', 76000, 5, 64800, '/images/coursebook/pass.png'),
  ('pass', '2026 Hidden Kice 시즌7', 76000, 5, 64800, '/images/coursebook/single.png');
