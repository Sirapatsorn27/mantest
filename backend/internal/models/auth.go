package models

// โครงสร้างสำหรับรับ Request ในการ Login
type LoginRequest struct {
    Email    string `json:"email" binding:"required"`
    Password string `json:"password" binding:"required"`
}

// โครงสร้างสำหรับ Response หลัง Login สำเร็จ
type AuthResponse struct {
    Token string `json:"token"`
    Role  string `json:"role"`
    Email string `json:"email"`
}