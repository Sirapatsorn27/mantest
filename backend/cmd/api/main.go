package main

import (
	"log"
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	h "mantest/backend/internal/handlers"
)

func main() {
	router := gin.Default()

	// 1. ตรวจสอบ CORS (ตั้งค่าให้ยืดหยุ่นสูงสุดเพื่อแก้ไขปัญหา)
	router.Use(cors.New(cors.Config{
		// 💡 แก้ไข: ใช้ Wildcard (*) ชั่วคราวเพื่อยืนยันว่า CORS ไม่ใช่ปัญหา
		AllowOrigins:     []string{"*"}, 
		// 💡 แก้ไข: เพิ่ม GET เพื่อให้ Browser ไม่เจอ 404/405 เมื่อเข้าด้วย URL ตรงๆ
		AllowMethods:     []string{"POST", "OPTIONS", "GET"}, 
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	// Route ทดสอบ
	router.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "API Server is running and updated!")
	})

	// กำหนด Route Login แบบเต็ม Path
	router.POST("/api/v1/login", h.LoginHandler) 

	// 4. รัน Server
	if err := router.Run(":8080"); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}

	log.Println("Server is running on :8080")
}