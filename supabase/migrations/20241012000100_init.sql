-- Initial Supabase migration for KisanRent
CREATE EXTENSION IF NOT EXISTS  uuid-ossp;
CREATE EXTENSION IF NOT EXISTS pgcrypto;
-- Example table
CREATE TABLE profiles (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL,
  full_name text,
  created_at timestamp with time zone DEFAULT now()
);
