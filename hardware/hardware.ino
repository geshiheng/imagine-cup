#include <Wire.h>
#include <PubSubClient.h>
#include <HX711.h>
#include <AzureIoT.h>

// I2C address of the MPU-6050 - 0x68 or 0x69 if AD0 is pulled HIGH
const int MPU = 0x68;
int16_t AcX, AcY, AcZ, GyX, GyY, GyZ;
float gForceX, gForceY, gForceZ, rotX, rotY, rotZ;
AzureIoT iot;
const char* connectionString = "HostName=myhub.azure-devices.net;DeviceId=mydevice;SharedAccessKey=0123456789abcdef0123456789abcdef";


 
void dataReceiver(){
  Wire.beginTransmission(MPU);
  Wire.write(0x3B);  // starting with register 0x3B (ACCEL_XOUT_H)
  Wire.endTransmission(false);
  Wire.requestFrom(MPU,12,true);  // request a total of 14 registers
  AcX = Wire.read()<<8|Wire.read();  // 0x3B (ACCEL_XOUT_H) & 0x3C (ACCEL_XOUT_L)     
  AcY = Wire.read()<<8|Wire.read();  // 0x3D (ACCEL_YOUT_H) & 0x3E (ACCEL_YOUT_L)
  AcZ = Wire.read()<<8|Wire.read();  // 0x3F (ACCEL_ZOUT_H) & 0x40 (ACCEL_ZOUT_L)
  GyX = Wire.read()<<8|Wire.read();  // 0x43 (GYRO_XOUT_H) & 0x44 (GYRO_XOUT_L)
  GyY = Wire.read()<<8|Wire.read();  // 0x45 (GYRO_YOUT_H) & 0x46 (GYRO_YOUT_L)
  GyZ = Wire.read()<<8|Wire.read();  // 0x47 (GYRO_ZOUT_H) & 0x48 (GYRO_ZOUT_L)
  processData();
}
 
void processData(){
  gForceX = AcX / 16384.0;
  gForceY = AcY / 16384.0; 
  gForceZ = AcZ / 16384.0;
  
  rotX = GyX / 131.0;
  rotY = GyY / 131.0; 
  rotZ = GyZ / 131.0;
}
 
void debugFunction(int16_t AcX, int16_t AcY, int16_t AcZ, int16_t GyX, int16_t GyY, int16_t GyZ){
  // Print the MPU values to the serial monitor
  Serial.print("Accelerometer: ");
  Serial.print("X="); Serial.print(gForceX);
  Serial.print("|Y="); Serial.print(gForceY);
  Serial.print("|Z="); Serial.println(gForceZ);  
  Serial.print("Gyroscope:");
  Serial.print("X="); Serial.print(rotX);
  Serial.print("|Y="); Serial.print(rotY);
  Serial.print("|Z="); Serial.println(rotZ);
}


void setup(){

  Serial.begin(9600);
  Wire.begin();
  Wire.beginTransmission(MPU);
  Wire.write(0x6B);  // PWR_MGMT_1 register
  Wire.write(0);     // set to zero (wakes up the MPU-6050)
  Wire.endTransmission(true);
  scale.begin();
  iot.begin();
}



void loop(){

  dataReceiver();
  debugFunction(AcX,AcY,AcZ,GyX,GyY,GyZ);
  String message = "{\"weight\":" + String(weight) + ",\"ax\":" + String(Acx) + ",\"ay\":" + String(Acy) + ",\"az\":" + String(Acz) + "}";
  iot.sendEvent(message);
  
  delay(100);
}
