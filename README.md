# 🧾 Task-Manager 

[Render Deployed](https://task-manager-1-isty.onrender.com)

A full-featured **Task Management System** built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js) and styled using **Tailwind CSS** for a clean, responsive interface.

This system allows **admins** to assign projects to groups, manage detailed **To-Do lists**, perform **CRUD operations**, track task **statuses**, monitor progress through a **dashboard**, and **download reports** in multiple formats.

---

## 🚀 Features

- 🧑‍💼 Admin dashboard to create and assign projects
- 👥 Group-based task delegation
- 📝 To-do list management for each project
- 🔄 Full **CRUD operations** for projects and tasks
- 📊 Status updates and real-time tracking
- 📁 Exportable reports (PDF/CSV)
- 🎨 Responsive UI built with Tailwind CSS
- 🔐 Authentication with JWT

---

## 🧰 Tech Stack

| Layer        | Technology        |
|--------------|-------------------|
| Frontend     | React.js (with Context API / Redux) |
| Backend      | Node.js + Express |
| Database     | MongoDB + Mongoose |
| Styling      | Tailwind CSS      |
| Reporting    | PDFKit / json2csv  |

---

##  Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/taskmanager.git
cd taskmanager

cd backend
npm install
# Create a .env file with:
# MONGO_URI=your_mongodb_connection
# JWT_SECRET=your_jwt_secret
npm start

cd ../frontend
npm install
npm start

#API will run on http://localhost:5000 by default.
#Frontend runs on http://localhost:3000.
```
## 📂 Folder Structure

![image](https://github.com/user-attachments/assets/2ac7b437-00cc-4fc1-abc2-2383919b3f79)


## 🧪 Key Modules

Admin Panel: Manage users, assign tasks

To-Do Module: Track task progress

Status Monitor: See live updates

Report Exporter: Generate reports

Auth: Login / JWT secured APIs

##📸 Screenshots


## login / sign up
![Login]![Screenshot 2025-05-10 122052](https://github.com/user-attachments/assets/4862f66a-f91f-401f-ac4e-5181ea13f80d)
)

![SignUp]![Screenshot 2025-05-10 122052](https://github.com/user-attachments/assets/a43cd806-62fc-4d52-9fef-6a1cf3ca0375)
)

###  Admin Dashboard View
![Dashboard]![Screenshot 2025-05-10 121810](https://github.com/user-attachments/assets/802ee92d-07a5-4c92-aef4-724336755ea2)
)


###  Admin Task List
![Admin Task List]![Screenshot 2025-05-10 122521](https://github.com/user-attachments/assets/eab8e4cc-ee41-4e66-bc66-eb3e43d431fe)
)

### Team members Monitoring

![Team Members](![Screenshot 2025-05-10 122553]![Screenshot 2025-05-10 122521](https://github.com/user-attachments/assets/1b668b28-f060-412f-8d01-f9818adc8899)
)

### Admin Task Management CRUD Applications

![Create Task Assign Team Add Due Date Set Priority of Task]![Screenshot 2025-05-10 122521](https://github.com/user-attachments/assets/0101344c-04c2-4a37-a92c-48fac8c3feec)

![Update delete and reassign team memebers]![Screenshot 2025-05-10 122521](https://github.com/user-attachments/assets/0f048fc4-789a-4c2a-9a80-7681d548b463)

### Member Dashborad
![Assigned Tasks And Progress of Tasks view]![Screenshot 2025-05-10 124349](https://github.com/user-attachments/assets/8e0e9bcf-0e18-4c85-9be8-9cc64119c4b9)

### User Tasks List
![Tasks Management For Assigned Tasks]![Screenshot 2025-05-10 124542](https://github.com/user-attachments/assets/a525b995-98ee-4182-8351-e778bc5d548f)

### User Status Updation OF assigned Task
![Screenshot 2025-05-10 124745](https://github.com/user-attachments/assets/d5a2408b-05db-4ab9-b334-5a202e2cc6ff)

### 📜 License
Licensed under the MIT License.


