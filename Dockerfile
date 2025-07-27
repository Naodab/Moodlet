FROM maven:3.9.6-eclipse-temurin-17

WORKDIR /app
COPY . .

CMD ["mvn", "spring-boot:run"]
