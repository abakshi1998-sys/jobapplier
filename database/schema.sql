CREATE TABLE IF NOT EXISTS jobs (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    company TEXT NOT NULL,
    description TEXT NOT NULL,
    salary TEXT,
    location TEXT NOT NULL,
    posted_date DATE,
    source TEXT NOT NULL,
    url TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS applications (
    id SERIAL PRIMARY KEY,
    job_id INTEGER REFERENCES jobs(id),
    resume_version TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'Not Applied'
);
