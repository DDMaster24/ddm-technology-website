-- Client intake form (/start) submissions.
-- Safe to run more than once.

CREATE TABLE IF NOT EXISTS intake_submissions (
  id            uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at    timestamptz NOT NULL DEFAULT now(),
  business_name text        NOT NULL,
  contact_name  text        NOT NULL,
  email         text        NOT NULL,
  phone         text        NOT NULL,
  answers       jsonb       NOT NULL,
  files         jsonb       NOT NULL DEFAULT '[]'::jsonb,
  status        text        NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'reviewed'))
);

CREATE INDEX IF NOT EXISTS intake_submissions_created_at_idx
  ON intake_submissions (created_at DESC);
