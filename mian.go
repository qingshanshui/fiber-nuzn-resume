package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html"
)

func main() {
	app := fiber.New(fiber.Config{
		// 采用html模板引擎
		Views: html.New("./views", ".html"),
	})
	// 静态目录
	app.Static("/", "./static")
	app.Get("/", func(c *fiber.Ctx) error {
		return c.Render("index", nil)
	})

	log.Fatal(app.Listen(":3001"))
}
