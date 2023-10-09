<?php
// ตั้งค่า Database
include("conndb.php");

// สร้างการเชื่อมต่อ Database
$mysqli = new mysqli($host, $username, $password, $database);

// ตรวจสอบการเชือมต่อ
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Set headers for CORS (Cross-Origin Resource Sharing)
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT, OPTIONS");

// ตรวจสอบ HTTP method
$method = $_SERVER["REQUEST_METHOD"];

// CRUD operations
switch ($method) {
    case "POST":
        $data = json_decode(file_get_contents("php://input"), true);
        $email = $data["email"];
        $password = $data["password"];

        // Select user data by email only
        $sql = "SELECT * FROM member WHERE email=?";
        $stmt = $mysqli->prepare($sql);
        $stmt->bind_param("s", $email);

        if ($stmt->execute()) {
            $result = $stmt->get_result();
            $member = $result->fetch_assoc();
            if ($member) {
                // Verify the password
                if (password_verify($password, $member['password'])) {
                    // Password ถูกต้อง
                    echo json_encode($member);
                } else {
                    // Password ไม่ถูกต้อง
                    echo json_encode(["error" => "Invalid password"]);
                    }
            } else {
                // User not found
                echo json_encode(["error" => "User not found"]);
            }
        } else {
            // Query execution failed
            echo json_encode(["error" => "Failed to retrieve"]);
        }
        break;

    default:
        echo json_encode(["error" => "Invalid request method"]);
        break;
}


// ปิดการเชื่อมต่อ Database
$mysqli->close();
?>
