CREATE TABLE gallery (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(80),
	"description" VARCHAR(120),
	"likes" INTEGER
);

INSERT INTO gallery ("path", "description", "likes")
VALUES ('images/me.jpg', 'My face.', 0), 
('images/babyalex.jpg', 'Me as a hip child.', 0), 
('images/speech.jpg', 'I gave a speech as the best man at my friends wedding.', 0),
('images/lastsoccer.jpg', 'My last soccer game during the college years. The Blue Falcons.', 0), 
('images/highschool.jpg', 'My mom and I at my high school graduation. 2011', 0), 
('images/olive1month.jpg', 'Olive, our Russian Blue we rescued. One day after we found her.', 0), 
('images/olive4years.jpg', 'Olive now, 4 years old.', 0), 
('images/goat_small.jpg', 'Photo of a goat.', 0), 
;