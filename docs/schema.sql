create table admins (
    id uuid primary key references auth.users(id),
    role text not null default 'admin',
    created_at timestamptz default now()
);

create table albums (
    id bigint generated always as identity primary key,
    title text not null,
    description text,
    image_url text not null,
    activity_date date,
    admin_id uuid references admins(id),
    created_at timestamptz default now()
);

create table studies (
    id bigint generated always as identity primary key,
    title text not null,
    description text not null,
    category text,
    is_active boolean not null default true,
    admin_id uuid references admins(id),
    created_at timestamptz default now()
);

create table notices (
    id bigint generated always as identity primary key,
    title text not null,
    content text not null,
    admin_id uuid references admins(id),
    created_at timestamptz default now()
);