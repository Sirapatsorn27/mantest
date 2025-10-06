package handlers

import (
	"net/http"
	"mantest/backend/internal/models"    
	"mantest/backend/internal/services"  
	"github.com/gin-gonic/gin"
)

func LoginHandler(c *gin.Context) {
	var req models.LoginRequest
	
	// 1. ผูกข้อมูล Request
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request payload"})
		return
	}

	token, roleName, email, err := services.Authenticate(req.Email, req.Password)

	if err != nil {
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