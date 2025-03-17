CREATE TABLE IF NOT EXISTS "todos" (
	"id" text PRIMARY KEY NOT NULL,
	"text" text,
	"completed" boolean
);
--> statement-breakpoint
DROP TABLE "todo-app_post";