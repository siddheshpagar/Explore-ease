# ExploreEase

ExploreEase is a web application that connects users with agents who list hotels. Agents can add hotel details, including photos and pricing, while users can browse and contact agents for bookings.

## Features

- Agents can register and log in.
- Agents can add, edit, and delete hotel listings with images and prices.
- Users can view hotel listings and contact agents.
- Secure authentication and authorization.
- Responsive frontend built with React.js.
- Backend powered by Spring Boot and MySQL.

## Technologies Used

### Frontend (React.js)
- React.js
- React Router
- Axios for API requests
- Bootstrap / TailwindCSS for styling

### Backend (Spring Boot)
- Spring Boot
- Spring Security (for authentication & authorization)
- Spring Data JPA
- MySQL Database
- Lombok
- Cloudinary / Local Storage for image handling (optional)

## Setup and Installation

### Prerequisites
- Node.js and npm installed
- Java 8
- MySQL Server running

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/siddheshpagar/Explore-ease.git
   ```
2. Navigate to the backend folder:
   ```sh
   cd explore-ease
   ```
3. Configure database in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/explore_ease
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   ```
4. Build and run the project:
   ```sh
   mvn spring-boot:run
   ```

### Frontend Setup
1. Clone the frontend repository:
   ```sh
   git clone https://github.com/siddheshpagar/Explore-ease.git
   ```
2. Navigate to the frontend folder:
   ```sh
   cd explore-ease-frontend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## 👥 Contributors
- **Siddhesh Suresh Pagar** (Project Creator)  

## 📞 Contact Me
- 🔗 [LinkedIn](https://www.linkedin.com/in/siddheshpagar/)
- 📸 [Instagram](https://www.instagram.com/iam__er_siiddh?igsh=MXdkamx6M2huM3A5dQ==)
- 📞 **Phone:** +91 7021031478  


## License
This project is licensed under the MIT License.
