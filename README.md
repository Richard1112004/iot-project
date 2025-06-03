# **Yolo:Bit v4 Setup Guide**

## **Installing the CH340 Driver**  
To enable your computer to recognize and communicate with **Yolo:Bit v4** via USB, the appropriate **CH340** driver must be installed.  

### **Windows Installation**  
1. Download the driver installation file [here](https://drive.google.com/file/d/1zGvzwXecH5fZHGky6Fk18qws-CTowqoU/view).  
2. Extract the downloaded file and run **CH341SER.EXE**.  
3. Click **INSTALL** to complete the setup.  

### **macOS Installation**  
1. Download the macOS driver [here](https://drive.google.com/file/d/1JvL74_LrJs0XQI4ddc2F1Md6OXI-RkfM/view).  
2. Unzip the file and follow the installation instructions provided.  

## **Connecting the Device**  
After successfully installing the driver, follow these steps to connect the board:

1. Power the Board
   Connect the board using a micro USB cable (preferably connected to a computer for stable power delivery).
2. Verify the Connection on Windows  
   - Open **Device Manager** and navigate to **Ports (COM & LPT)**.  
   - A new **COM port** will appear when the USB cable is plugged in; it will disappear when disconnected.

## **Initializing the Smart Home System**  
Follow these steps to set up the firmware on the device:

1. **Import the Project:**  
   Access the project's firmware by importing it using the following link:  
   🔗 [Smart Home System Firmware](https://app.ohstem.vn/#!/share/yolobit/2y0C09u77TEfvYHfdhBA2HqEFq8).

2. **Connect the Device Hardware:**  
   Based on the hardware source code, connect each peripheral device to the corresponding pins on the extended Yolo:Bit board. Ensure that all connections are secure and match the documented pin configurations.

3. **Run the Firmware:**  
   Within the web-based OhStem development platform, click the **Run** button (located at the bottom-right corner) and select the correct port for your connected board. This action initiates data exchange among the hardware components—such as sensors and actuators—and facilitates communication with the cloud-based **Adafruit IO** service.
   
4. **Save to Device:**  
   Within the web-based OhStem development platform, open the **Settings** menu and select **Save Project to Device**. This step ensures that the firmware is permanently stored on the microcontroller, so the system retains its functionality without needing to reload the code on every power cycle.

Once these steps are completed, the hardware setup is fully operational. For end users, system initialization is streamlined—simply providing power to the system is sufficient to initialize it.


# IoT Project Setup Guide
This repository contains both backend and frontend components of our IoT project.

## System Architecture

- **Backend**: Go application with MongoDB database
- **Frontend**: React Native Expo application (web build)

## Backend Setup (Root directory)

The backend consists of a Go application and a MongoDB database orchestrated using Docker Compose.

### Prerequisites

- Docker
- Docker Compose

### Running the Backend

1. Navigate to the root project directory:
2. Build and start the services:

   ```bash
   docker-compose up -d
   ```

3. To view logs:

   ```bash
   docker-compose logs -f
   ```

4. To stop the services:
   ```bash
   docker-compose down
   ```

### Backend Configuration

- MongoDB is accessible at `localhost:27017`
- Backend API is accessible at `localhost:8080`
- Environment variables can be modified in the `docker-compose.yml` file

## Frontend Setup (dadn directory)

The frontend is a React Native Expo application with a Docker setup for production web builds.

### Prerequisites

- Docker

### Running the Frontend

1. Navigate to the frontend directory:

   ```bash
   cd dadn
   ```

2. Build the Docker image:

   ```bash
   docker build -t iot-frontend:latest -f DockerFile .
   ```

3. Run the frontend container:

   ```bash
   docker run -d -p 3000:80 --name frontend-container iot-frontend
   ```

4. Access the frontend at `http://localhost:3000`

### Frontend Development

For local development without Docker:

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

## Troubleshooting

### Backend Issues

- If MongoDB fails to connect, ensure the container is running with `docker-compose ps`
- Check MongoDB connection string in environment variables

### Frontend Issues

- If the frontend build fails, try clearing the Expo cache with `npx expo start -c`
- For Docker build issues, verify Node.js and Expo CLI versions in the Dockerfile

## Additional Information

- The backend Dockerfile uses multi-stage builds to create an optimized container
- The frontend Dockerfile creates a production-ready web build served through Nginx
- Update `update-env-ip.ts` script for automatic IP configuration in development



This is my group link report 
```bash
https://www.overleaf.com/7692353563sdvbhddhcrgn#5ec828
```

If you have any hesitation. Do not hestiate to contact me at hung.nguyenkhmt22@hcmut.edu.vn
