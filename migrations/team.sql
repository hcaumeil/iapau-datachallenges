CREATE TABLE IF NOT EXISTS team (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT,
    archived BOOLEAN
);
