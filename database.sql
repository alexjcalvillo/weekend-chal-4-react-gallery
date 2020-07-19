CREATE TABLE gallery (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(80),
	"description" VARCHAR(120),
	"likes" INTEGER
);

INSERT INTO gallery ("path", "description", "likes")
VALUES ('images/me.jpg', 'My face.', 0), 
('images/wedding.jpg', 'Crosby and I before the big moment', 0), 
('images/speech.jpg', 'I gave a speech as the best man at my friends wedding.', 0);