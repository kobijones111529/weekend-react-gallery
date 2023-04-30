CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"path" TEXT NOT NULL,
	"description" VARCHAR(255),
	"likes" INT NOT NULL DEFAULT 0
);

-- Test data
INSERT INTO "gallery"
	("path", "description", "likes")
VALUES
	('images/goat_small.jpg', 'A goat', 2);
