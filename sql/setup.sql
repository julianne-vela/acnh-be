DROP TABLE IF EXISTS villagers;

CREATE TABLE villagers (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    personality TEXT NOT NULL,
    birthday TEXT NOT NULL,
    species TEXT NOT NULL,
    gender TEXT NOT NULL,
    hobby TEXT NOT NULL,
    catch_phrase TEXT NOT NULL,
    icon_uri TEXT NOT NULL,
    image_uri TEXT NOT NULL,
    bubble_color TEXT, 
    text_color TEXT,
    saying TEXT NOT NULL
)