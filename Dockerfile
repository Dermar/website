# syntax=docker/dockerfile:1

# ---- Build stage: JDK builds the fat jar ----
FROM eclipse-temurin:21-jdk AS build
WORKDIR /app

# Copy the repo then build
COPY . .
RUN ./gradlew :application:bootJar --no-daemon

# ---- Runtime stage: slim JRE runs the jar ----
FROM eclipse-temurin:21-jre AS runtime
WORKDIR /app
COPY --from=build /app/application/build/libs/application-1.0.0.jar app.jar

# Railway injects $PORT at runtime; Spring Boot must bind to it.
# Falls back to 8080 for local `docker run`.
EXPOSE 8080
CMD ["sh", "-c", "java -jar app.jar --server.port=${PORT:-8080}"]