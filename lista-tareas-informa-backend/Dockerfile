# Usar una imagen base de Maven con OpenJDK
#FROM maven:3.8.6-openjdk-11 AS build

FROM openjdk:17-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo JAR generado desde la etapa de construcción
COPY target/demo-0.0.1-SNAPSHOT.jar /app/demo.jar

# Expone el puerto donde tu aplicación escuchará
EXPOSE 3000

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "/app/demo.jar"]
