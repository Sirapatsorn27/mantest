package handlers

import (
	"net/http"
	"mantest/backend/internal/models"     // 💡 Import Path ที่ถูกต้อง
	"mantest/backend/internal/services"    // 💡 Import Path ที่ถูกต้อง
	"github.com/gin-gonic/gin"
)

// LoginHandler จัดการ POST /api/v1/login
func LoginHandler(c *gin.Context) {
	var req models.LoginRequest
	
	// 1. ผูกข้อมูล Request
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request payload"})
		return
	}

	// 2. เรียก Service
	token, roleName, email, err := services.Authenticate(req.Email, req.Password)

	if err != nil {
		// Authentication Fail: ส่ง 401 Unauthorized
		c.JSON(http.StatusUnauthorized, gin.H{"message": "Authentication Fail: Please check user or Password"})
		return
	}

	// 3. Login สำเร็จ ส่ง Token กลับไป
	c.JSON(http.StatusOK, models.AuthResponse{
		Token: token,
		Role:  roleName,
		Email: email,
	})
}