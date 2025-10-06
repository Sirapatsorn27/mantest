package services

import (
	"errors"
	"time"
	"github.com/golang-jwt/jwt/v5"
)

var jwtSecret = []byte("YOUR_ULTRA_SECURE_SECRET_KEY")

const AdminTestEmail = "Admin"
const AdminTestPassword = "1234"

// Authenticate: ตรวจสอบผู้ใช้และสร้าง JWT Token
func Authenticate(email, password string) (string, string, string, error) {
	if email != AdminTestEmail || password != AdminTestPassword {
		return "", "", "", errors.New("authentication failed: invalid test credentials")
	}

	const AdminRoleName = "Admin" 

	claims := jwt.MapClaims{
		"email":       email,
		"role_name":   AdminRoleName,
		"exp":         time.Now().Add(time.Hour * 24).Unix(), // Token หมดอายุใน 24 ชม.
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString(jwtSecret)
	if err != nil {
		return "", "", "", errors.New("failed to generate token")
	}

	return tokenString, AdminRoleName, email, nil
}